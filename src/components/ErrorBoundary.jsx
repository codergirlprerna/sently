import { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // Log to console for now. Swap this for a real error-reporting
    // service (Sentry, LogRocket, etc.) once you have one set up.
    console.error("Unhandled error caught by ErrorBoundary:", error, info);
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center px-6 bg-bg text-center">
          <div className="max-w-[420px]">
            <h1 className="font-display text-[1.8rem] leading-[1.2] mb-3">
              Something went wrong
            </h1>
            <p className="text-[0.88rem] text-muted leading-[1.7] mb-7">
              Sorry about that — an unexpected error broke this page. Refreshing usually fixes it. If it keeps happening, message us on WhatsApp or Instagram and we'll sort it out.
            </p>
            <button
              type="button"
              onClick={this.handleReload}
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-ink text-white text-[0.83rem] font-medium hover:bg-ink-soft transition-colors"
            >
              Reload page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}