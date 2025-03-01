function PairingList({ onPairingSelect }) {
    const [pairings, setPairings] = React.useState(mockData.pairings);
    const [filters, setFilters] = React.useState({
        status: '',
        city: ''
    });

    const columns = [
        {
            header: 'Student',
            field: 'studentId',
            render: (studentId) => {
                const student = mockData.students.find(s => s.id === studentId);
                return (
                    <div className="flex items-center space-x-3">
                        <img
                            src={student.profilePicture}
                            alt={student.name}
                            className="w-8 h-8 rounded-full"
                        />
                        <span>{student.name}</span>
                    </div>
                );
            }
        },
        {
            header: 'Host Family',
            field: 'familyId',
            render: (familyId) => {
                const family = mockData.families.find(f => f.id === familyId);
                return family.name;
            }
        },
        {
            header: 'Duration',
            field: 'startDate',
            render: (startDate, pairing) => (
                <span>
                    {new Date(startDate).toLocaleDateString()} - 
                    {new Date(pairing.endDate).toLocaleDateString()}
                </span>
            )
        },
        {
            header: 'Status',
            field: 'status',
            render: (status) => (
                <span className={`px-2 py-1 rounded-full text-sm ${
                    status === 'active' ? 'bg-green-500' : 'bg-yellow-500'
                }`}>
                    {status}
                </span>
            )
        },
        {
            header: 'Documents',
            field: 'documents',
            render: (documents) => (
                <div className="space-y-1">
                    <a
                        href={documents.studentDoc}
                        className="text-blue-400 hover:text-blue-300 block"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fas fa-file-pdf mr-2"></i>
                        Student Document
                    </a>
                    <a
                        href={documents.familyDoc}
                        className="text-blue-400 hover:text-blue-300 block"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fas fa-file-pdf mr-2"></i>
                        Family Document
                    </a>
                </div>
            )
        }
    ];

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <div data-name="pairing-list" className="space-y-4">
            <div className="flex gap-4 mb-6">
                <div className="flex-1">
                    <label className="form-label">Status</label>
                    <select
                        name="status"
                        value={filters.status}
                        onChange={handleFilterChange}
                        className="form-select"
                    >
                        <option value="">All Status</option>
                        <option value="active">Active</option>
                        <option value="pending">Pending</option>
                        <option value="completed">Completed</option>
                    </select>
                </div>
                <div className="flex-1">
                    <label className="form-label">City</label>
                    <select
                        name="city"
                        value={filters.city}
                        onChange={handleFilterChange}
                        className="form-select"
                    >
                        <option value="">All Cities</option>
                        <option value="Toronto">Toronto</option>
                        <option value="Vancouver">Vancouver</option>
                        <option value="Montreal">Montreal</option>
                    </select>
                </div>
            </div>

            <DataTable
                columns={columns}
                data={pairings}
                onRowClick={onPairingSelect}
            />
        </div>
    );
}
