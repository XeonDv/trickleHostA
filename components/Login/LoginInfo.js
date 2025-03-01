function LoginInfo() {
    return (
        <div data-name="login-info" className="bg-secondary-dark p-6 rounded-lg mt-8">
            <h3 className="text-xl font-bold mb-4">Test Login Credentials</h3>
            
            <div className="space-y-6">
                <div>
                    <h4 className="text-lg font-semibold text-primary-main mb-2">Manager Accounts</h4>
                    <div className="space-y-2">
                        <div className="p-3 bg-secondary-main rounded">
                            <p><span className="text-gray-400">Email:</span> manager@hostabroad.ca</p>
                            <p><span className="text-gray-400">Password:</span> manager123</p>
                            <p className="text-sm text-gray-400 mt-1">Toronto Region Manager</p>
                        </div>
                        <div className="p-3 bg-secondary-main rounded">
                            <p><span className="text-gray-400">Email:</span> sarah@hostabroad.ca</p>
                            <p><span className="text-gray-400">Password:</span> sarah123</p>
                            <p className="text-sm text-gray-400 mt-1">Vancouver Region Manager</p>
                        </div>
                    </div>
                </div>

                <div>
                    <h4 className="text-lg font-semibold text-primary-main mb-2">Coordinator Accounts</h4>
                    <div className="space-y-2">
                        <div className="p-3 bg-secondary-main rounded">
                            <p><span className="text-gray-400">Email:</span> mike@hostabroad.ca</p>
                            <p><span className="text-gray-400">Password:</span> mike123</p>
                            <p className="text-sm text-gray-400 mt-1">Toronto East Coordinator</p>
                        </div>
                        <div className="p-3 bg-secondary-main rounded">
                            <p><span className="text-gray-400">Email:</span> lisa@hostabroad.ca</p>
                            <p><span className="text-gray-400">Password:</span> lisa123</p>
                            <p className="text-sm text-gray-400 mt-1">Toronto West Coordinator</p>
                        </div>
                        <div className="p-3 bg-secondary-main rounded">
                            <p><span className="text-gray-400">Email:</span> david@hostabroad.ca</p>
                            <p><span className="text-gray-400">Password:</span> david123</p>
                            <p className="text-sm text-gray-400 mt-1">Vancouver Coordinator</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-6 text-sm text-gray-400">
                <p>Note: These are test credentials for demonstration purposes only.</p>
            </div>
        </div>
    );
}
