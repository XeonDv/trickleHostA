function DashboardHeader({ title, user }) {
    return (
        <header data-name="dashboard-header" className="bg-secondary-main border-b border-divider">
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold">{title}</h1>
                    <div className="flex items-center space-x-4">
                        <div className="text-right">
                            <p className="font-semibold">{user.name}</p>
                            <p className="text-sm text-gray-400 capitalize">{user.type}</p>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-primary-main flex items-center justify-center">
                            <span className="text-lg font-bold">
                                {user.name.charAt(0)}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
