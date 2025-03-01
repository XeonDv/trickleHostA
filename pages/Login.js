function Login() {
    const [formData, setFormData] = React.useState({
        email: '',
        password: ''
    });
    const [error, setError] = React.useState('');
    const [isLoading, setIsLoading] = React.useState(false);

    React.useEffect(() => {
        // Redirect if already logged in
        if (auth.isAuthenticated()) {
            const user = auth.getCurrentUser();
            if (user.type === 'manager') {
                window.location.href = '/dashboard/manager';
            } else if (user.type === 'coordinator') {
                window.location.href = '/dashboard/coordinator';
            }
        }
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        try {
            if (!formData.email || !formData.password) {
                throw new Error('Please fill in all fields');
            }

            const result = await auth.login(formData.email, formData.password);
            
            if (result.success) {
                const user = result.user;
                if (user.type === 'manager') {
                    window.location.href = '/dashboard/manager';
                } else if (user.type === 'coordinator') {
                    window.location.href = '/dashboard/coordinator';
                }
            } else {
                setError(result.error);
            }
        } catch (error) {
            reportError(error);
            setError(error.message || 'An error occurred during login');
        } finally {
            setIsLoading(false);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        setError(''); // Clear error when user types
    };

    return (
        <div data-name="login-page" className="min-h-screen flex items-center justify-center py-12 px-4">
            <div className="max-w-md w-full">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold">Welcome Back</h2>
                    <p className="text-gray-400 mt-2">Sign in to your account</p>
                </div>

                <form onSubmit={handleSubmit} className="form-container">
                    {error && (
                        <div className="bg-error-main bg-opacity-10 border border-error-main text-error-main px-4 py-3 rounded mb-4">
                            {error}
                        </div>
                    )}

                    <div className="mb-4">
                        <label className="form-label" htmlFor="email">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="form-input"
                            placeholder="Enter your email"
                            disabled={isLoading}
                            required
                        />
                    </div>

                    <div className="mb-6">
                        <label className="form-label" htmlFor="password">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="form-input"
                            placeholder="Enter your password"
                            disabled={isLoading}
                            required
                        />
                    </div>

                    <button 
                        type="submit" 
                        className="btn-primary w-full flex items-center justify-center"
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <div className="flex items-center">
                                <i className="fas fa-spinner fa-spin mr-2"></i>
                                Signing in...
                            </div>
                        ) : (
                            'Sign In'
                        )}
                    </button>

                    <div className="mt-4 text-center text-sm text-gray-400">
                        <a href="/forgot-password" className="hover:text-white">
                            Forgot your password?
                        </a>
                    </div>
                </form>

                <LoginInfo />
            </div>
        </div>
    );
}
