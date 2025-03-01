function Sidebar({ activeTab, onTabChange, userType }) {
    const menuItems = React.useMemo(() => {
        const items = [
            {
                id: 'students',
                label: 'Students',
                icon: 'fa-graduation-cap',
                show: true
            },
            {
                id: 'families',
                label: 'Families',
                icon: 'fa-house-user',
                show: true
            },
            {
                id: 'pairings',
                label: 'Pairings',
                icon: 'fa-handshake',
                show: true
            },
            {
                id: 'payments',
                label: 'Payments',
                icon: 'fa-credit-card',
                show: true
            },
            {
                id: 'reviews',
                label: 'Reviews',
                icon: 'fa-star',
                show: true
            },
            {
                id: 'coordinators',
                label: 'Coordinators',
                icon: 'fa-users',
                show: userType === 'manager'
            },
            {
                id: 'settings',
                label: 'Settings',
                icon: 'fa-cog',
                show: userType === 'manager'
            }
        ];

        return items.filter(item => item.show);
    }, [userType]);

    return (
        <div data-name="dashboard-sidebar" className="w-64 bg-secondary-dark border-r border-divider h-screen fixed left-0 top-0">
            <div className="p-4">
                <h1 className="text-xl font-bold mb-8">HostAbroad.ca</h1>
                <nav className="space-y-2">
                    {menuItems.map(item => (
                        <button
                            key={item.id}
                            onClick={() => onTabChange(item.id)}
                            className={`w-full flex items-center px-4 py-3 rounded-lg transition-colors ${
                                activeTab === item.id
                                    ? 'bg-primary-main text-white'
                                    : 'text-gray-400 hover:bg-secondary-light'
                            }`}
                        >
                            <i className={`fas ${item.icon} w-6`}></i>
                            <span>{item.label}</span>
                        </button>
                    ))}
                </nav>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-divider">
                <button
                    onClick={() => {
                        auth.logout();
                        window.location.href = '/login';
                    }}
                    className="w-full flex items-center px-4 py-3 text-gray-400 hover:bg-secondary-light rounded-lg"
                >
                    <i className="fas fa-sign-out-alt w-6"></i>
                    <span>Logout</span>
                </button>
            </div>
        </div>
    );
}
