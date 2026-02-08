import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError() {
        // Update state so the next render will show the fallback UI
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // Log error details for debugging
        console.error('Error caught by boundary:', error, errorInfo);
        this.setState({
            error,
            errorInfo
        });
    }

    render() {
        if (this.state.hasError) {
            // Fallback UI
            return (
                <div className="min-h-screen flex items-center justify-center bg-gray-50">
                    <div className="max-w-2xl mx-auto p-8 bg-white rounded-lg shadow-lg">
                        <h1 className="text-3xl font-bold text-red-600 mb-4">
                            Oops! Something went wrong
                        </h1>
                        <p className="text-gray-700 mb-4">
                            We're sorry for the inconvenience. An error occurred while loading this page.
                        </p>
                        <details className="mb-4">
                            <summary className="cursor-pointer text-orange-700 font-semibold hover:underline">
                                Error Details (for developers)
                            </summary>
                            <pre className="mt-2 p-4 bg-gray-100 rounded text-sm overflow-auto">
                                {this.state.error && this.state.error.toString()}
                                {this.state.errorInfo && this.state.errorInfo.componentStack}
                            </pre>
                        </details>
                        <button
                            onClick={() => window.location.reload()}
                            className="px-6 py-2 bg-orange-600 text-white rounded hover:bg-orange-700 transition"
                        >
                            Reload Page
                        </button>
                        <a
                            href="/"
                            className="ml-4 px-6 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition inline-block"
                        >
                            Go to Home
                        </a>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
