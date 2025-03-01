function CoordinatorManagement() {
    return (
        <div data-name="coordinator-management">
            <div className="mb-6">
                <h2 className="text-2xl font-bold">Coordinator Management</h2>
                <p className="text-gray-400">Manage your team of coordinators</p>
            </div>

            <CoordinatorList />
        </div>
    );
}
