function StatusBadge({ status, type }) {
    const getStatusColor = () => {
        const statusColors = {
            student: {
                'new lead': 'bg-blue-500',
                'confirmed': 'bg-green-500',
                'family assigned': 'bg-purple-500',
                'canceled': 'bg-red-500',
                'former student': 'bg-gray-500'
            },
            family: {
                'new lead': 'bg-blue-500',
                'certified': 'bg-green-500',
                'need visit': 'bg-yellow-500',
                'disabled': 'bg-red-500'
            }
        };

        return statusColors[type]?.[status.toLowerCase()] || 'bg-gray-500';
    };

    return (
        <span
            data-name="status-badge"
            className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor()}`}
        >
            {status}
        </span>
    );
}
