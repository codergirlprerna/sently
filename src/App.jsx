import LoadIntro from "./components/LoadIntro";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Templates from "./components/Templates";
import Pricing from "./components/Pricing";
import Payment from "./components/Payment";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import { CTA, Footer } from "./components/CTAFooter";
import { AuthProvider } from "./context/AuthContext";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <div className="min-h-screen">
          <LoadIntro />
          <Navbar />
          <Hero />
          <HowItWorks />
          <Templates />
          <Pricing />
          <Payment />
          <Testimonials />
          <FAQ />
          <CTA />
          <Footer />
        </div>
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;