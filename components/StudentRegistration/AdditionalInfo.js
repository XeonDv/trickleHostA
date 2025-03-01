function AdditionalInfo({ onNext, onBack, initialData = {} }) {
    const [formData, setFormData] = React.useState({
        dateOfBirth: initialData.dateOfBirth || '',
        gender: initialData.gender || '',
        phone: initialData.phone || '',
        originLanguage: initialData.originLanguage || '',
        country: initialData.country || '',
        agency: initialData.agency || '',
        school: initialData.school || '',
        accommodationType: initialData.accommodationType || '',
        mealPlan: initialData.mealPlan || '',
        smokers: initialData.smokers || false,
        children: initialData.children || false,
        teenagers: initialData.teenagers || false,
        pets: initialData.pets || false,
        healthTreatment: initialData.healthTreatment || false,
        mentalPhysicalCondition: initialData.mentalPhysicalCondition || false,
        emergencyContactName: initialData.emergencyContactName || '',
        emergencyContactPhone: initialData.emergencyContactPhone || ''
    });

    const [errors, setErrors] = React.useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validation.validateAdditionalInfo(formData);
        
        if (Object.keys(validationErrors).length === 0) {
            storage.saveRegistrationStep(2, formData);
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
        <form data-name="additional-info-form" onSubmit={handleSubmit} className="form-container">
            <h2 className="text-2xl font-bold mb-6">Additional Information</h2>

            <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                    <label className="form-label" htmlFor="dateOfBirth">Date of Birth</label>
                    <input
                        type="date"
                        id="dateOfBirth"
                        name="dateOfBirth"
                        value={formData.dateOfBirth}
                        onChange={handleChange}
                        className="form-input"
                    />
                    {errors.dateOfBirth && <p className="form-error">{errors.dateOfBirth}</p>}
                </div>

                <div>
                    <label className="form-label" htmlFor="gender">Gender</label>
                    <select
                        id="gender"
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        className="form-select"
                    >
                        <option value="">Select gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                    {errors.gender && <p className="form-error">{errors.gender}</p>}
                </div>
            </div>

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

            <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                    <label className="form-label" htmlFor="originLanguage">Origin Language</label>
                    <input
                        type="text"
                        id="originLanguage"
                        name="originLanguage"
                        value={formData.originLanguage}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="Your native language"
                    />
                    {errors.originLanguage && <p className="form-error">{errors.originLanguage}</p>}
                </div>

                <div>
                    <label className="form-label" htmlFor="country">Country of Residence</label>
                    <input
                        type="text"
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="Your country"
                    />
                    {errors.country && <p className="form-error">{errors.country}</p>}
                </div>
            </div>

            <div className="mb-4">
                <label className="form-label" htmlFor="agency">Agency (Optional)</label>
                <input
                    type="text"
                    id="agency"
                    name="agency"
                    value={formData.agency}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Enter agency name if applicable"
                />
            </div>

            <div className="mb-4">
                <label className="form-label" htmlFor="school">School of Attendance</label>
                <input
                    type="text"
                    id="school"
                    name="school"
                    value={formData.school}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Enter school name"
                />
                {errors.school && <p className="form-error">{errors.school}</p>}
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                    <label className="form-label" htmlFor="accommodationType">Accommodation Type</label>
                    <select
                        id="accommodationType"
                        name="accommodationType"
                        value={formData.accommodationType}
                        onChange={handleChange}
                        className="form-select"
                    >
                        <option value="">Select type</option>
                        <option value="single">Single</option>
                        <option value="shared">Shared</option>
                    </select>
                    {errors.accommodationType && <p className="form-error">{errors.accommodationType}</p>}
                </div>

                <div>
                    <label className="form-label" htmlFor="mealPlan">Meal Plan</label>
                    <select
                        id="mealPlan"
                        name="mealPlan"
                        value={formData.mealPlan}
                        onChange={handleChange}
                        className="form-select"
                    >
                        <option value="">Select meal plan</option>
                        <option value="3meals">3 Meals</option>
                        <option value="2meals">2 Meals</option>
                        <option value="noMeals">No Meals</option>
                    </select>
                    {errors.mealPlan && <p className="form-error">{errors.mealPlan}</p>}
                </div>
            </div>

            <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">House Preferences</h3>
                <div className="grid grid-cols-2 gap-4">
                    <label className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            name="smokers"
                            checked={formData.smokers}
                            onChange={handleChange}
                        />
                        <span>Can live with smokers</span>
                    </label>
                    <label className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            name="children"
                            checked={formData.children}
                            onChange={handleChange}
                        />
                        <span>Can live with children</span>
                    </label>
                    <label className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            name="teenagers"
                            checked={formData.teenagers}
                            onChange={handleChange}
                        />
                        <span>Can live with teenagers</span>
                    </label>
                    <label className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            name="pets"
                            checked={formData.pets}
                            onChange={handleChange}
                        />
                        <span>Can live with pets</span>
                    </label>
                </div>
            </div>

            <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Health Information</h3>
                <div className="space-y-2">
                    <label className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            name="healthTreatment"
                            checked={formData.healthTreatment}
                            onChange={handleChange}
                        />
                        <span>Currently under treatment or medication</span>
                    </label>
                    <label className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            name="mentalPhysicalCondition"
                            checked={formData.mentalPhysicalCondition}
                            onChange={handleChange}
                        />
                        <span>Have mental or physical condition</span>
                    </label>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                    <label className="form-label" htmlFor="emergencyContactName">Emergency Contact Name</label>
                    <input
                        type="text"
                        id="emergencyContactName"
                        name="emergencyContactName"
                        value={formData.emergencyContactName}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="Emergency contact name"
                    />
                    {errors.emergencyContactName && <p className="form-error">{errors.emergencyContactName}</p>}
                </div>

                <div>
                    <label className="form-label" htmlFor="emergencyContactPhone">Emergency Contact Phone</label>
                    <input
                        type="tel"
                        id="emergencyContactPhone"
                        name="emergencyContactPhone"
                        value={formData.emergencyContactPhone}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="Emergency contact phone"
                    />
                    {errors.emergencyContactPhone && <p className="form-error">{errors.emergencyContactPhone}</p>}
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
