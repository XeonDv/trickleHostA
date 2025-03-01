function FamilyDetails({ family, onClose, onUpdate }) {
    const [formData, setFormData] = React.useState(family);
    const [isEditing, setIsEditing] = React.useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            // Update family logic here
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

    return (
        <div data-name="family-details" className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-secondary-main w-full max-w-3xl rounded-lg shadow-xl overflow-hidden">
                <div className="flex justify-between items-center p-6 border-b border-divider">
                    <h2 className="text-2xl font-bold">Family Details</h2>
                    <button onClick={onClose} className="text-gray-400 hover:text-white">
                        <i className="fas fa-times"></i>
                    </button>
                </div>

                <div className="p-6">
                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <label className="form-label">Family Name</label>
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
                                    value={formData.phone}
                                    onChange={handleChange}
                                    disabled={!isEditing}
                                    className="form-input"
                                />
                            </div>

                            <div>
                                <label className="form-label">Address</label>
                                <input
                                    type="text"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    disabled={!isEditing}
                                    className="form-input"
                                />
                            </div>

                            <div>
                                <label className="form-label">City</label>
                                <input
                                    type="text"
                                    name="city"
                                    value={formData.city}
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
                                    <option value="certified">Certified</option>
                                    <option value="need visit">Need Visit</option>
                                    <option value="disabled">Disabled</option>
                                </select>
                            </div>
                        </div>

                        <div className="mt-6">
                            <label className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    name="availability"
                                    checked={formData.availability}
                                    onChange={(e) => handleChange({
                                        target: {
                                            name: 'availability',
                                            value: e.target.checked
                                        }
                                    })}
                                    disabled={!isEditing}
                                    className="form-checkbox"
                                />
                                <span>Available for new students</span>
                            </label>
                        </div>

                        <div className="mt-6">
                            <label className="form-label">Payment Information</label>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="text-sm text-gray-400">Received</label>
                                    <input
                                        type="number"
                                        name="payments.received"
                                        value={formData.payments.received}
                                        onChange={handleChange}
                                        disabled={!isEditing}
                                        className="form-input"
                                    />
                                </div>
                                <div>
                                    <label className="text-sm text-gray-400">Pending</label>
                                    <input
                                        type="number"
                                        name="payments.pending"
                                        value={formData.payments.pending}
                                        onChange={handleChange}
                                        disabled={!isEditing}
                                        className="form-input"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 flex justify-end space-x-4">
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
                                    Edit
                                </button>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
