function StudentDetails({ student, onClose, onUpdate }) {
    const [formData, setFormData] = React.useState(student);
    const [isEditing, setIsEditing] = React.useState(false);
    const [activeTab, setActiveTab] = React.useState('basic'); // basic, documents, history

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            onUpdate(formData);
            setIsEditing(false);
        } catch (error) {
            reportError(error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handlePaymentChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            payment: {
                ...prev.payment,
                [name.split('.')[1]]: parseFloat(value)
            }
        }));
    };

    return (
        <div data-name="student-details" className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto">
            <div className="bg-secondary-main w-full max-w-4xl rounded-lg shadow-xl">
                <div className="flex justify-between items-center p-6 border-b border-divider">
                    <div>
                        <h2 className="text-2xl font-bold">{formData.name}</h2>
                        <p className="text-gray-400">Student ID: {formData.id}</p>
                    </div>
                    <button onClick={onClose} className="text-gray-400 hover:text-white">
                        <i className="fas fa-times text-xl"></i>
                    </button>
                </div>

                <div className="p-6">
                    <div className="flex space-x-4 mb-6 border-b border-divider">
                        <button
                            className={`pb-3 px-4 ${activeTab === 'basic' ? 'border-b-2 border-primary-main text-white' : 'text-gray-400'}`}
                            onClick={() => setActiveTab('basic')}
                        >
                            Basic Information
                        </button>
                        <button
                            className={`pb-3 px-4 ${activeTab === 'documents' ? 'border-b-2 border-primary-main text-white' : 'text-gray-400'}`}
                            onClick={() => setActiveTab('documents')}
                        >
                            Documents
                        </button>
                        <button
                            className={`pb-3 px-4 ${activeTab === 'history' ? 'border-b-2 border-primary-main text-white' : 'text-gray-400'}`}
                            onClick={() => setActiveTab('history')}
                        >
                            History
                        </button>
                    </div>

                    {activeTab === 'basic' && (
                        <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <label className="form-label">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        disabled={!isEditing}
                                        className="form-input"
                                    />
                                </div>

                                <div>
                                    <label className="form-label">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        disabled={!isEditing}
                                        className="form-input"
                                    />
                                </div>

                                <div>
                                    <label className="form-label">Phone</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone || ''}
                                        onChange={handleChange}
                                        disabled={!isEditing}
                                        className="form-input"
                                    />
                                </div>

                                <div>
                                    <label className="form-label">Nationality</label>
                                    <input
                                        type="text"
                                        name="nationality"
                                        value={formData.nationality || ''}
                                        onChange={handleChange}
                                        disabled={!isEditing}
                                        className="form-input"
                                    />
                                </div>

                                <div>
                                    <label className="form-label">Status</label>
                                    <select
                                        name="status"
                                        value={formData.status}
                                        onChange={handleChange}
                                        disabled={!isEditing}
                                        className="form-select"
                                    >
                                        <option value="new lead">New Lead</option>
                                        <option value="confirmed">Confirmed</option>
                                        <option value="family assigned">Family Assigned</option>
                                        <option value="canceled">Canceled</option>
                                        <option value="former student">Former Student</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="form-label">Agency</label>
                                    <input
                                        type="text"
                                        name="agency"
                                        value={formData.agency}
                                        onChange={handleChange}
                                        disabled={!isEditing}
                                        className="form-input"
                                    />
                                </div>

                                <div>
                                    <label className="form-label">Start Date</label>
                                    <input
                                        type="date"
                                        name="startDate"
                                        value={formData.startDate}
                                        onChange={handleChange}
                                        disabled={!isEditing}
                                        className="form-input"
                                    />
                                </div>

                                <div>
                                    <label className="form-label">End Date</label>
                                    <input
                                        type="date"
                                        name="endDate"
                                        value={formData.endDate}
                                        onChange={handleChange}
                                        disabled={!isEditing}
                                        className="form-input"
                                    />
                                </div>
                            </div>

                            <div className="mt-8">
                                <h3 className="text-lg font-semibold mb-4">Payment Information</h3>
                                <div className="grid grid-cols-3 gap-6 bg-secondary-dark p-4 rounded-lg">
                                    <div>
                                        <label className="text-sm text-gray-400">Total Amount</label>
                                        <input
                                            type="number"
                                            name="payment.total"
                                            value={formData.payment.total}
                                            onChange={handlePaymentChange}
                                            disabled={!isEditing}
                                            className="form-input mt-1"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-sm text-gray-400">Paid Amount</label>
                                        <input
                                            type="number"
                                            name="payment.paid"
                                            value={formData.payment.paid}
                                            onChange={handlePaymentChange}
                                            disabled={!isEditing}
                                            className="form-input mt-1"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-sm text-gray-400">Pending Amount</label>
                                        <input
                                            type="number"
                                            name="payment.pending"
                                            value={formData.payment.pending}
                                            onChange={handlePaymentChange}
                                            disabled={!isEditing}
                                            className="form-input mt-1"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 flex justify-end space-x-4">
                                {isEditing ? (
                                    <>
                                        <button
                                            type="button"
                                            onClick={() => setIsEditing(false)}
                                            className="btn-secondary"
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            type="submit"
                                            className="btn-primary"
                                        >
                                            Save Changes
                                        </button>
                                    </>
                                ) : (
                                    <button
                                        type="button"
                                        onClick={() => setIsEditing(true)}
                                        className="btn-primary"
                                    >
                                        <i className="fas fa-edit mr-2"></i>
                                        Edit Information
                                    </button>
                                )}
                            </div>
                        </form>
                    )}

                    {activeTab === 'documents' && (
                        <div className="space-y-6">
                            <div className="bg-secondary-dark p-4 rounded-lg">
                                <h3 className="text-lg font-semibold mb-4">Required Documents</h3>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-4 border border-divider rounded-lg">
                                        <div className="flex justify-between items-start mb-2">
                                            <div>
                                                <h4 className="font-semibold">Passport</h4>
                                                <p className="text-sm text-gray-400">PDF or Image</p>
                                            </div>
                                            <button className="text-primary-main">
                                                <i className="fas fa-upload"></i>
                                            </button>
                                        </div>
                                        {formData.passport ? (
                                            <div className="flex items-center text-sm text-gray-400">
                                                <i className="fas fa-check-circle text-green-500 mr-2"></i>
                                                Uploaded
                                            </div>
                                        ) : (
                                            <div className="flex items-center text-sm text-gray-400">
                                                <i className="fas fa-clock text-yellow-500 mr-2"></i>
                                                Pending
                                            </div>
                                        )}
                                    </div>
                                    <div className="p-4 border border-divider rounded-lg">
                                        <div className="flex justify-between items-start mb-2">
                                            <div>
                                                <h4 className="font-semibold">Visa</h4>
                                                <p className="text-sm text-gray-400">PDF or Image</p>
                                            </div>
                                            <button className="text-primary-main">
                                                <i className="fas fa-upload"></i>
                                            </button>
                                        </div>
                                        {formData.visa ? (
                                            <div className="flex items-center text-sm text-gray-400">
                                                <i className="fas fa-check-circle text-green-500 mr-2"></i>
                                                Uploaded
                                            </div>
                                        ) : (
                                            <div className="flex items-center text-sm text-gray-400">
                                                <i className="fas fa-clock text-yellow-500 mr-2"></i>
                                                Pending
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'history' && (
                        <div className="space-y-6">
                            <div className="bg-secondary-dark p-4 rounded-lg">
                                <h3 className="text-lg font-semibold mb-4">Payment History</h3>
                                <table className="w-full">
                                    <thead>
                                        <tr className="text-left">
                                            <th className="pb-2">Date</th>
                                            <th className="pb-2">Amount</th>
                                            <th className="pb-2">Type</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {formData.payment.history.map((record, index) => (
                                            <tr key={index} className="border-t border-divider">
                                                <td className="py-2">
                                                    {new Date(record.date).toLocaleDateString()}
                                                </td>
                                                <td className="py-2">${record.amount}</td>
                                                <td className="py-2">{record.type}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <div className="bg-secondary-dark p-4 rounded-lg">
                                <h3 className="text-lg font-semibold mb-4">Activity Log</h3>
                                <div className="space-y-4">
                                    <div className="flex items-start space-x-3">
                                        <div className="w-8 h-8 rounded-full bg-primary-main flex items-center justify-center">
                                            <i className="fas fa-user-check"></i>
                                        </div>
                                        <div>
                                            <p className="font-semibold">Registration Completed</p>
                                            <p className="text-sm text-gray-400">
                                                {new Date(formData.createdAt).toLocaleString()}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
