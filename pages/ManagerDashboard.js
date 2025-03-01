function ManagerDashboard() {
    const [activeTab, setActiveTab] = React.useState('students');
    const user = auth.getCurrentUser();

    if (!user || !auth.isManager()) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">Access Denied</h2>
                    <p className="text-gray-400 mb-4">You don't have permission to access this page.</p>
                    <a href="/login" className="btn-primary">
                        Login
                    </a>
                </div>
            </div>
        );
    }

    const getTabTitle = () => {
        const titles = {
            students: 'Student Management',
            families: 'Family Management',
            pairings: 'Pairing Management',
            payments: 'Payment Tracking',
            reviews: 'Reviews',
            coordinators: 'Coordinator Management',
            settings: 'Settings'
        };
        return titles[activeTab] || 'Dashboard';
    };

    return (
        <div data-name="manager-dashboard" className="min-h-screen flex">
            <Sidebar
                activeTab={activeTab}
                onTabChange={setActiveTab}
                userType="manager"
            />
            <div className="flex-1 ml-64">
                <DashboardHeader title={getTabTitle()} user={user} />
                <main className="p-6">
                    {activeTab === 'students' && <StudentManagement />}
                    {activeTab === 'families' && <FamilyManagement />}
                    {activeTab === 'pairings' && <PairingManagement />}
                    {activeTab === 'payments' && <PaymentTracking />}
                    {activeTab === 'reviews' && <ReviewManagement />}
                    {activeTab === 'coordinators' && <CoordinatorManagement />}
                    {activeTab === 'settings' && <BrandingSettings />}
                </main>
            </div>
        </div>
    );
}
