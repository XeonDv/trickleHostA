function ProtectedRoute({ children, requiredRole = null }) {
    const [isChecking, setIsChecking] = React.useState(true);

    React.useEffect(() => {
        const checkAuth = () => {
            try {
                if (!auth.isAuthenticated()) {
                    auth.redirectToLogin();
                    return;
                }

                if (requiredRole === 'manager' && !auth.isManager()) {
                    auth.redirectToLogin();
                    return;
                }

                if (requiredRole === 'coordinator' && !auth.isCoordinator()) {
                    auth.redirectToLogin();
                    return;
                }

                setIsChecking(false);
            } catch (error) {
                reportError(error);
                auth.redirectToLogin();
            }
        };

        checkAuth();
    }, [requiredRole]);

    if (isChecking) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <i className="fas fa-spinner fa-spin text-4xl mb-4"></i>
                    <p className="text-gray-400">Loading...</p>
                </div>
            </div>
        );
    }

    return children;
}
