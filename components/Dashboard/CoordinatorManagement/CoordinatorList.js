function CoordinatorList() {
    const [coordinators, setCoordinators] = React.useState(
        mockData.users.filter(user => user.type === 'coordinator')
    );

    const columns = [
        {
            header: 'Name',
            field: 'name'
        },
        {
            header: 'Email',
            field: 'email'
        },
        {
            header: 'Actions',
            field: 'id',
            render: (id) => (
                <div className="space-x-2">
                    <button
                        onClick={() => handleEdit(id)}
                        className="text-blue-400 hover:text-blue-300"
                    >
                        <i className="fas fa-edit"></i>
                    </button>
                    <button
                        onClick={() => handleDelete(id)}
                        className="text-red-400 hover:text-red-300"
                    >
                        <i className="fas fa-trash"></i>
                    </button>
                </div>
            )
        }
    ];

    const handleEdit = (id) => {
        // Implement edit coordinator logic
    };

    const handleDelete = (id) => {
        // Implement delete coordinator logic
    };

    const handleAddCoordinator = () => {
        // Implement add coordinator logic
    };

    return (
        <div data-name="coordinator-list" className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold">Coordinators</h2>
                <button
                    onClick={handleAddCoordinator}
                    className="btn-primary"
                >
                    <i className="fas fa-plus mr-2"></i>
                    Add Coordinator
                </button>
            </div>

            <DataTable
                columns={columns}
                data={coordinators}
            />
        </div>
    );
}
