function CreatePairing({ onClose, onSubmit }) {
    const [formData, setFormData] = React.useState({
        studentId: '',
        familyId: '',
        startDate: '',
        endDate: ''
    });

    const [availableStudents, setAvailableStudents] = React.useState(
        mockData.students.filter(s => s.status === 'confirmed')
    );

    const [availableFamilies, setAvailableFamilies] = React.useState(
        mockData.families.filter(f => f.status === 'certified' && f.availability)
    );

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            onSubmit(formData);
            onClose();
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
        <div data-name="create-pairing" className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-secondary-main w-full max-w-lg rounded-lg shadow-xl overflow-hidden">
                <div className="flex justify-between items-center p-6 border-b border-divider">
                    <h2 className="text-2xl font-bold">Create New Pairing</h2>
                    <button onClick={onClose} className="text-gray-400 hover:text-white">
                        <i className="fas fa-times"></i>
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="p-6">
                    <div className="space-y-4">
                        <div>
                            <label className="form-label">Student</label>
                            <select
                                name="studentId"
                                value={formData.studentId}
                                onChange={handleChange}
                                className="form-select"
                                required
                            >
                                <option value="">Select Student</option>
                                {availableStudents.map(student => (
                                    <option key={student.id} value={student.id}>
                                        {student.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label className="form-label">Host Family</label>
                            <select
                                name="familyId"
                                value={formData.familyId}
                                onChange={handleChange}
                                className="form-select"
                                required
                            >
                                <option value="">Select Family</option>
                                {availableFamilies.map(family => (
                                    <option key={family.id} value={family.id}>
                                        {family.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label className="form-label">Start Date</label>
                            <input
                                type="date"
                                name="startDate"
                                value={formData.startDate}
                                onChange={handleChange}
                                className="form-input"
                                required
                            />
                        </div>

                        <div>
                            <label className="form-label">End Date</label>
                            <input
                                type="date"
                                name="endDate"
                                value={formData.endDate}
                                onChange={handleChange}
                                className="form-input"
                                required
                            />
                        </div>
                    </div>

                    <div className="mt-6 flex justify-end space-x-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="btn-secondary"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="btn-primary"
                        >
                            Create Pairing
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
