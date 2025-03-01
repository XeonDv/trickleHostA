function StudentList({ onStudentSelect }) {
    const [students, setStudents] = React.useState(mockData.students);
    const [filters, setFilters] = React.useState({
        status: '',
        agency: '',
        city: ''
    });

    const columns = [
        {
            header: 'Name',
            field: 'name',
            render: (name, student) => (
                <div className="flex items-center space-x-3">
                    <img
                        src={student.profilePicture}
                        alt={name}
                        className="w-8 h-8 rounded-full"
                    />
                    <span>{name}</span>
                </div>
            )
        },
        {
            header: 'Status',
            field: 'status',
            render: (status) => (
                <StatusBadge status={status} type="student" />
            )
        },
        {
            header: 'Stay Duration',
            field: 'startDate',
            render: (startDate, student) => (
                <span>
                    {new Date(startDate).toLocaleDateString()} - 
                    {new Date(student.endDate).toLocaleDateString()}
                </span>
            )
        },
        {
            header: 'City',
            field: 'city'
        },
        {
            header: 'Agency',
            field: 'agency'
        },
        {
            header: 'Payment Status',
            field: 'payment',
            render: (payment) => (
                <div>
                    <div className="text-sm">
                        Paid: ${payment.paid}
                    </div>
                    <div className="text-sm text-gray-400">
                        Pending: ${payment.pending}
                    </div>
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

    const filteredStudents = students.filter(student => {
        return (
            (!filters.status || student.status === filters.status) &&
            (!filters.agency || student.agency === filters.agency) &&
            (!filters.city || student.city === filters.city)
        );
    });

    return (
        <div data-name="student-list" className="space-y-4">
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
                        <option value="new lead">New Lead</option>
                        <option value="confirmed">Confirmed</option>
                        <option value="family assigned">Family Assigned</option>
                        <option value="canceled">Canceled</option>
                        <option value="former student">Former Student</option>
                    </select>
                </div>
                <div className="flex-1">
                    <label className="form-label">Agency</label>
                    <select
                        name="agency"
                        value={filters.agency}
                        onChange={handleFilterChange}
                        className="form-select"
                    >
                        <option value="">All Agencies</option>
                        <option value="Global Education">Global Education</option>
                        <option value="Study Abroad Inc">Study Abroad Inc</option>
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
                data={filteredStudents}
                onRowClick={onStudentSelect}
            />
        </div>
    );
}
