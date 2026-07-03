import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

// Firebase is lazy-loaded — its ~200KB JS does NOT block initial render/paint.
// We use signInWithRedirect instead of signInWithPopup because popups trigger
// Cross-Origin-Opener-Policy errors in Chrome and silently fail on mobile.
let _authModule = null;
async function getFirebase() {
  if (_authModule) return _authModule;

  const [{ initializeApp, getApps }, { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithRedirect, getRedirectResult, signOut: fbSignOut }] =
    await Promise.all([import("firebase/app"), import("firebase/auth")]);

  const config = {
    apiKey:            import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain:        import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId:         import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket:     import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId:             import.meta.env.VITE_FIREBASE_APP_ID,
  };

  const app  = getApps().length ? getApps()[0] : initializeApp(config);
  const auth = getAuth(app);

  _authModule = { auth, GoogleAuthProvider, onAuthStateChanged, signInWithRedirect, getRedirectResult, signOut: fbSignOut };
  return _authModule;
}

export function AuthProvider({ children }) {
  const [user,    setUser]    = useState(null);
  const [loading, setLoading] = useState(true);
  const [error,   setError]   = useState(null);

  useEffect(() => {
    let unsubscribe;

    const init = async () => {
      const { auth, onAuthStateChanged, getRedirectResult } = await getFirebase();

      // Capture result if we just returned from Google's redirect page.
      try {
        await getRedirectResult(auth);
      } catch (err) {
        setError("Couldn't complete sign-in. Please try again.");
        console.error("Firebase redirect result error:", err);
      }

      unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
        setUser(firebaseUser);
        setLoading(false);
      });
    };

    // Defer init until the browser is idle so it doesn't compete with paint.
    const schedule = typeof requestIdleCallback !== "undefined"
      ? (cb) => requestIdleCallback(cb, { timeout: 2000 })
      : (cb) => setTimeout(cb, 200);

    schedule(() => init());

    return () => { if (unsubscribe) unsubscribe(); };
  }, []);

  const signInWithGoogle = async () => {
    setError(null);
    try {
      const { auth, GoogleAuthProvider, signInWithRedirect } = await getFirebase();
      await signInWithRedirect(auth, new GoogleAuthProvider());
    } catch (err) {
      setError("Couldn't sign you in. Please try again.");
      console.error("Firebase sign-in error:", err);
    }
  };

  const signOut = async () => {
    try {
      const { auth, signOut: fbSignOut } = await getFirebase();
      await fbSignOut(auth);
    } catch (err) {
      console.error("Firebase sign-out error:", err);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, error, signInWithGoogle, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within an AuthProvider");
  return ctx;
}