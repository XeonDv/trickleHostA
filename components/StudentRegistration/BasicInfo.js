function BasicInfo({ onNext, initialData = {} }) {
    const [formData, setFormData] = React.useState({
        name: initialData.name || '',
        email: initialData.email || '',
        password: initialData.password || '',
        startDate: initialData.startDate || '',
        endDate: initialData.endDate || '',
        city: initialData.city || ''
    });

    const [errors, setErrors] = React.useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validation.validateBasicInfo(formData);
        
        if (Object.keys(validationErrors).length === 0) {
            onNext(formData);
        } else {
            setErrors(validationErrors);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error when field is modified
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    return (
        <form data-name="basic-info-form" onSubmit={handleSubmit} className="space-y-6">
            <h2 className="text-2xl font-bold mb-6">Basic Information</h2>
            
            <div>
                <label className="form-label" htmlFor="name">Full Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`form-input ${errors.name ? 'border-red-500' : ''}`}
                    placeholder="Enter your full name"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            <div>
                <label className="form-label" htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`form-input ${errors.email ? 'border-red-500' : ''}`}
                    placeholder="Enter your email"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
                <label className="form-label" htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className={`form-input ${errors.password ? 'border-red-500' : ''}`}
                    placeholder="Enter your password"
                />
                {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="form-label" htmlFor="startDate">Start Date</label>
                    <input
                        type="date"
                        id="startDate"
                        name="startDate"
                        value={formData.startDate}
                        onChange={handleChange}
                        className={`form-input ${errors.startDate ? 'border-red-500' : ''}`}
                    />
                    {errors.startDate && <p className="text-red-500 text-sm mt-1">{errors.startDate}</p>}
                </div>

                <div>
                    <label className="form-label" htmlFor="endDate">End Date</label>
                    <input
                        type="date"
                        id="endDate"
                        name="endDate"
                        value={formData.endDate}
                        onChange={handleChange}
                        className={`form-input ${errors.endDate ? 'border-red-500' : ''}`}
                    />
                    {errors.endDate && <p className="text-red-500 text-sm mt-1">{errors.endDate}</p>}
                </div>
            </div>

            <div>
                <label className="form-label" htmlFor="city">Destination City</label>
                <select
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className={`form-select ${errors.city ? 'border-red-500' : ''}`}
                >
                    <option value="">Select a city</option>
                    <option value="toronto">Toronto</option>
                    <option value="vancouver">Vancouver</option>
                    <option value="montreal">Montreal</option>
                    <option value="calgary">Calgary</option>
                </select>
                {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
            </div>

            <button type="submit" className="btn-primary w-full">
                Next Step
            </button>
        </form>
    );
}
