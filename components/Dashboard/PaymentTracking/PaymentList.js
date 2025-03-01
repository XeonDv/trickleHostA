function PaymentList() {
    const [view, setView] = React.useState('students'); // 'students' or 'families'
    const [filters, setFilters] = React.useState({
        status: '',
        date: ''
    });

    const studentColumns = [
        {
            header: 'Student',
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
            header: 'Total Amount',
            field: 'payment',
            render: (payment) => `$${payment.total}`
        },
        {
            header: 'Paid',
            field: 'payment',
            render: (payment) => `$${payment.paid}`
        },
        {
            header: 'Pending',
            field: 'payment',
            render: (payment) => `$${payment.pending}`
        },
        {
            header: 'Payment History',
            field: 'payment',
            render: (payment) => (
                <div className="space-y-1">
                    {payment.history.map((record, index) => (
                        <div key={index} className="text-sm">
                            <span className="text-gray-400">
                                {new Date(record.date).toLocaleDateString()}:
                            </span>
                            {' '}${record.amount} ({record.type})
                        </div>
                    ))}
                </div>
            )
        }
    ];

    const familyColumns = [
        {
            header: 'Family',
            field: 'name'
        },
        {
            header: 'Received',
            field: 'payments',
            render: (payments) => `$${payments.received}`
        },
        {
            header: 'Pending',
            field: 'payments',
            render: (payments) => `$${payments.pending}`
        },
        {
            header: 'Payment History',
            field: 'payments',
            render: (payments) => (
                <div className="space-y-1">
                    {payments.history.map((record, index) => (
                        <div key={index} className="text-sm">
                            <span className="text-gray-400">
                                {new Date(record.date).toLocaleDateString()}:
                            </span>
                            {' '}${record.amount} ({record.type})
                        </div>
                    ))}
                </div>
            )
        }
    ];

    return (
        <div data-name="payment-list" className="space-y-6">
            <div className="flex gap-4">
                <button
                    onClick={() => setView('students')}
                    className={`px-4 py-2 rounded-lg ${
                        view === 'students'
                            ? 'bg-primary-main text-white'
                            : 'bg-secondary-light text-gray-400'
                    }`}
                >
                    Student Payments
                </button>
                <button
                    onClick={() => setView('families')}
                    className={`px-4 py-2 rounded-lg ${
                        view === 'families'
                            ? 'bg-primary-main text-white'
                            : 'bg-secondary-light text-gray-400'
                    }`}
                >
                    Family Payments
                </button>
            </div>

            {view === 'students' ? (
                <DataTable
                    columns={studentColumns}
                    data={mockData.students}
                />
            ) : (
                <DataTable
                    columns={familyColumns}
                    data={mockData.families}
                />
            )}
        </div>
    );
}
