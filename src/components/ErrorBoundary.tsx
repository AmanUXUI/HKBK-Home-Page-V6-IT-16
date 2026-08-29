import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export default class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error in component tree:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-[#FBF4D7] p-6 text-center">
          <div className="max-w-md bg-white p-8 rounded-2xl shadow-xl border border-[#8C1515]/20">
            <h2 className="text-2xl font-bold text-[#8C1515] mb-3">Something went wrong</h2>
            <p className="text-sm text-gray-600 mb-6">
              An unexpected error occurred while rendering the application.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-[#8C1515] hover:bg-[#721111] text-white px-6 py-2.5 rounded-xl font-medium text-sm transition-all"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
