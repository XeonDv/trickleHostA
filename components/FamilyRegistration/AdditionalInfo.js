function AdditionalInfo({ onNext, onBack, initialData = {} }) {
    const [formData, setFormData] = React.useState({
        phone: initialData.phone || '',
        experience: initialData.experience || '',
        address: initialData.address || '',
        background: initialData.background || '',
        languages: initialData.languages || '',
        pets: initialData.pets || '',
        agePreference: initialData.agePreference || '',
        genderPreference: initialData.genderPreference || '',
        foodService: initialData.foodService || false,
        specialDiet: initialData.specialDiet || false,
    });

    const [errors, setErrors] = React.useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = {};

        if (!formData.phone) validationErrors.phone = "Phone number is required";
        if (!formData.address) validationErrors.address = "Address is required";
        if (!formData.languages) validationErrors.languages = "Languages are required";

        if (Object.keys(validationErrors).length === 0) {
            storage.saveFamilyRegistrationStep(2, formData);
            onNext(formData);
        } else {
            setErrors(validationErrors);
        }
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    return (
        <form data-name="family-additional-info-form" onSubmit={handleSubmit} className="form-container">
            <h2 className="text-2xl font-bold mb-6">Additional Information</h2>

            <div className="mb-4">
                <label className="form-label" htmlFor="phone">Phone Number</label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Enter your phone number"
                />
                {errors.phone && <p className="form-error">{errors.phone}</p>}
            </div>

            <div className="mb-4">
                <label className="form-label" htmlFor="experience">Homestay Experience</label>
                <textarea
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    className="form-input h-24"
                    placeholder="Describe your experience as a homestay provider"
                ></textarea>
            </div>

            <div className="mb-4">
                <label className="form-label" htmlFor="address">Address</label>
                <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Enter your full address"
                />
                {errors.address && <p className="form-error">{errors.address}</p>}
            </div>

            <div className="mb-4">
                <label className="form-label" htmlFor="background">Background</label>
                <textarea
                    id="background"
                    name="background"
                    value={formData.background}
                    onChange={handleChange}
                    className="form-input h-24"
                    placeholder="Tell us about your background"
                ></textarea>
            </div>

            <div className="mb-4">
                <label className="form-label" htmlFor="languages">Languages Spoken</label>
                <input
                    type="text"
                    id="languages"
                    name="languages"
                    value={formData.languages}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Enter languages spoken (comma separated)"
                />
                {errors.languages && <p className="form-error">{errors.languages}</p>}
            </div>

            <div className="mb-4">
                <label className="form-label" htmlFor="pets">Pets</label>
                <input
                    type="text"
                    id="pets"
                    name="pets"
                    value={formData.pets}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="List any pets in your household"
                />
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                    <label className="form-label" htmlFor="agePreference">Age Preference</label>
                    <select
                        id="agePreference"
                        name="agePreference"
                        value={formData.agePreference}
                        onChange={handleChange}
                        className="form-select"
                    >
                        <option value="">Select age preference</option>
                        <option value="16-18">16-18 years</option>
                        <option value="19-22">19-22 years</option>
                        <option value="23+">23+ years</option>
                        <option value="any">Any age</option>
                    </select>
                </div>

                <div>
                    <label className="form-label" htmlFor="genderPreference">Gender Preference</label>
                    <select
                        id="genderPreference"
                        name="genderPreference"
                        value={formData.genderPreference}
                        onChange={handleChange}
                        className="form-select"
                    >
                        <option value="">Select gender preference</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="any">Any</option>
                    </select>
                </div>
            </div>

            <div className="mb-6">
                <div className="flex items-center mb-3">
                    <input
                        type="checkbox"
                        id="foodService"
                        name="foodService"
                        checked={formData.foodService}
                        onChange={handleChange}
                        className="mr-2"
                    />
                    <label htmlFor="foodService">Provide food service</label>
                </div>

                <div className="flex items-center">
                    <input
                        type="checkbox"
                        id="specialDiet"
                        name="specialDiet"
                        checked={formData.specialDiet}
                        onChange={handleChange}
                        className="mr-2"
                    />
                    <label htmlFor="specialDiet">Can accommodate special diets</label>
                </div>
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
