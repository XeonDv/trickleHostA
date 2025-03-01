function FamilyList({ onFamilySelect }) {
    const [families, setFamilies] = React.useState(mockData.families);
    const [filters, setFilters] = React.useState({
        status: '',
        city: '',
        availability: ''
    });

    const columns = [
        {
            header: 'Family Name',
            field: 'name'
        },
        {
            header: 'Status',
            field: 'status',
            render: (status) => (
                <StatusBadge status={status} type="family" />
            )
        },
        {
            header: 'City',
            field: 'city'
        },
        {
            header: 'Contact',
            field: 'phone',
            render: (phone, family) => (
                <div>
                    <div className="text-sm">{phone}</div>
                    <div className="text-sm text-gray-400">{family.email}</div>
                </div>
            )
        },
        {
            header: 'Address',
            field: 'address'
        },
        {
            header: 'Availability',
            field: 'availability',
            render: (availability) => (
                <span className={`px-2 py-1 rounded-full text-sm ${
                    availability ? 'bg-green-500' : 'bg-red-500'
                }`}>
                    {availability ? 'Available' : 'Not Available'}
                </span>
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

    const filteredFamilies = families.filter(family => {
        return (
            (!filters.status || family.status === filters.status) &&
            (!filters.city || family.city === filters.city) &&
            (filters.availability === '' || family.availability.toString() === filters.availability)
        );
    });

    return (
        <div data-name="family-list" className="space-y-4">
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
                        <option value="certified">Certified</option>
                        <option value="need visit">Need Visit</option>
                        <option value="disabled">Disabled</option>
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
                <div className="flex-1">
                    <label className="form-label">Availability</label>
                    <select
                        name="availability"
                        value={filters.availability}
                        onChange={handleFilterChange}
                        className="form-select"
                    >
                        <option value="">All</option>
                        <option value="true">Available</option>
                        <option value="false">Not Available</option>
                    </select>
                </div>
            </div>

            <DataTable
                columns={columns}
                data={filteredFamilies}
                onRowClick={onFamilySelect}
            />
        </div>
    );
}
