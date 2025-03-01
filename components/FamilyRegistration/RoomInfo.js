function Room({ room, onChange, onRemove }) {
    return (
        <div className="border border-divider p-4 rounded-lg mb-4">
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="form-label">Room Type</label>
                    <select
                        value={room.type}
                        onChange={(e) => onChange({ ...room, type: e.target.value })}
                        className="form-select"
                    >
                        <option value="">Select room type</option>
                        <option value="single">Single Room</option>
                        <option value="double">Double Room</option>
                    </select>
                </div>

                <div>
                    <label className="form-label">Bed Type</label>
                    <select
                        value={room.bedType}
                        onChange={(e) => onChange({ ...room, bedType: e.target.value })}
                        className="form-select"
                    >
                        <option value="">Select bed type</option>
                        <option value="single">Single Bed</option>
                        <option value="double">Double Bed</option>
                        <option value="bunk">Bunk Bed</option>
                    </select>
                </div>

                <div className="col-span-2">
                    <label className="form-label">Description</label>
                    <textarea
                        value={room.description}
                        onChange={(e) => onChange({ ...room, description: e.target.value })}
                        className="form-input"
                        placeholder="Describe the room and its amenities"
                    ></textarea>
                </div>
            </div>

            <button
                type="button"
                onClick={onRemove}
                className="mt-4 text-error-main hover:text-error-light"
            >
                <i className="fas fa-trash-alt mr-2"></i>Remove Room
            </button>
        </div>
    );
}

function RoomInfo({ onNext, onBack, initialData = {} }) {
    const [formData, setFormData] = React.useState({
        rooms: initialData.rooms || []
    });

    const [errors, setErrors] = React.useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = {};

        if (formData.rooms.length === 0) {
            validationErrors.rooms = "At least one room is required";
        }

        if (Object.keys(validationErrors).length === 0) {
            storage.saveFamilyRegistrationStep(4, formData);
            onNext(formData);
        } else {
            setErrors(validationErrors);
        }
    };

    const handleRoomChange = (index, updatedRoom) => {
        setFormData(prev => ({
            ...prev,
            rooms: prev.rooms.map((room, i) => 
                i === index ? updatedRoom : room
            )
        }));
    };

    const addRoom = () => {
        setFormData(prev => ({
            ...prev,
            rooms: [...prev.rooms, {
                type: '',
                bedType: '',
                description: ''
            }]
        }));
    };

    const removeRoom = (index) => {
        setFormData(prev => ({
            ...prev,
            rooms: prev.rooms.filter((_, i) => i !== index)
        }));
    };

    return (
        <form data-name="room-info-form" onSubmit={handleSubmit} className="form-container">
            <h2 className="text-2xl font-bold mb-6">Room Information</h2>

            <div className="mb-6">
                {formData.rooms.map((room, index) => (
                    <Room
                        key={index}
                        room={room}
                        onChange={(updatedRoom) => handleRoomChange(index, updatedRoom)}
                        onRemove={() => removeRoom(index)}
                    />
                ))}
                <button
                    type="button"
                    onClick={addRoom}
                    className="btn-secondary"
                >
                    <i className="fas fa-plus mr-2"></i>Add Room
                </button>
                {errors.rooms && <p className="form-error mt-2">{errors.rooms}</p>}
            </div>

            <div className="flex justify-between gap-4">
                <button type="button" onClick={onBack} className="btn-secondary w-full">
                    Back
                </button>
                <button type="submit" className="btn-primary w-full">
                    Next Step
                </button>
            </div>
        </form>
    );
}
