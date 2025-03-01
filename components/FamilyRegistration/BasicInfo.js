function BasicInfo({ onNext, initialData = {} }) {
    const [formData, setFormData] = React.useState({
        name: initialData.name || '',
        email: initialData.email || '',
        password: initialData.password || '',
        city: initialData.city || ''
    });

    const [errors, setErrors] = React.useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validation.validateBasicInfo(formData);
        
        if (Object.keys(validationErrors).length === 0) {
            storage.saveFamilyRegistrationStep(1, formData);
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
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    return (
        <form data-name="family-basic-info-form" onSubmit={handleSubmit} className="form-container">
            <h2 className="text-2xl font-bold mb-6">Basic Information</h2>
            
            <div className="mb-4">
                <label className="form-label" htmlFor="name">Full Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Enter your full name"
                />
                {errors.name && <p className="form-error">{errors.name}</p>}
            </div>

            <div className="mb-4">
                <label className="form-label" htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Enter your email"
                />
                {errors.email && <p className="form-error">{errors.email}</p>}
            </div>

            <div className="mb-4">
                <label className="form-label" htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Enter your password"
                />
                {errors.password && <p className="form-error">{errors.password}</p>}
            </div>

            <div className="mb-6">
                <label className="form-label" htmlFor="city">City</label>
                <select
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="form-select"
                >
                    <option value="">Select a city</option>
                    <option value="toronto">Toronto</option>
                    <option value="vancouver">Vancouver</option>
                    <option value="montreal">Montreal</option>
                    <option value="calgary">Calgary</option>
                </select>
                {errors.city && <p className="form-error">{errors.city}</p>}
            </div>

            <button type="submit" className="btn-primary w-full">
                Next Step
            </button>
        </form>
    );
}
