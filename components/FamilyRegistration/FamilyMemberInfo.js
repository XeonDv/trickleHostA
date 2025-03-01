function FamilyMember({ member, onChange, onRemove, isMainMember }) {
    return (
        <div className="border border-divider p-4 rounded-lg mb-4">
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="form-label">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={member.name}
                        onChange={(e) => onChange({ ...member, name: e.target.value })}
                        className="form-input"
                    />
                </div>

                <div>
                    <label className="form-label">Date of Birth</label>
                    <input
                        type="date"
                        name="dateOfBirth"
                        value={member.dateOfBirth}
                        onChange={(e) => onChange({ ...member, dateOfBirth: e.target.value })}
                        className="form-input"
                    />
                </div>

                <div>
                    <label className="form-label">Gender</label>
                    <select
                        name="gender"
                        value={member.gender}
                        onChange={(e) => onChange({ ...member, gender: e.target.value })}
                        className="form-select"
                    >
                        <option value="">Select gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <div>
                    <label className="form-label">Occupation</label>
                    <input
                        type="text"
                        name="occupation"
                        value={member.occupation}
                        onChange={(e) => onChange({ ...member, occupation: e.target.value })}
                        className="form-input"
                    />
                </div>

                <div>
                    <label className="form-label">Background Check Date</label>
                    <input
                        type="date"
                        name="backgroundCheckDate"
                        value={member.backgroundCheckDate}
                        onChange={(e) => onChange({ ...member, backgroundCheckDate: e.target.value })}
                        className="form-input"
                    />
                </div>

                <div>
                    <label className="form-label">Background Expiry Date</label>
                    <input
                        type="date"
                        name="backgroundExpiryDate"
                        value={member.backgroundExpiryDate}
                        onChange={(e) => onChange({ ...member, backgroundExpiryDate: e.target.value })}
                        className="form-input"
                    />
                </div>
            </div>

            <div className="mt-4">
                <label className="flex items-center">
                    <input
                        type="checkbox"
                        checked={member.hasCondition}
                        onChange={(e) => onChange({ ...member, hasCondition: e.target.checked })}
                        className="mr-2"
                    />
                    Has physical or mental condition
                </label>
                {member.hasCondition && (
                    <textarea
                        value={member.condition}
                        onChange={(e) => onChange({ ...member, condition: e.target.value })}
                        className="form-input mt-2"
                        placeholder="Please describe the condition"
                    ></textarea>
                )}
            </div>

            {!isMainMember && (
                <button
                    type="button"
                    onClick={onRemove}
                    className="mt-4 text-error-main hover:text-error-light"
                >
                    <i className="fas fa-trash-alt mr-2"></i>Remove Member
                </button>
            )}
        </div>
    );
}

function FamilyMemberInfo({ onNext, onBack, initialData = {} }) {
    const [formData, setFormData] = React.useState({
        principalMember: initialData.principalMember || {
            name: '',
            dateOfBirth: '',
            gender: '',
            occupation: '',
            backgroundCheckDate: '',
            backgroundExpiryDate: '',
            hasCondition: false,
            condition: ''
        },
        familyMembers: initialData.familyMembers || []
    });

    const [errors, setErrors] = React.useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = {};

        if (!formData.principalMember.name) {
            validationErrors.principalMember = "Principal member information is required";
        }

        if (Object.keys(validationErrors).length === 0) {
            storage.saveFamilyRegistrationStep(3, formData);
            onNext(formData);
        } else {
            setErrors(validationErrors);
        }
    };

    const handlePrincipalMemberChange = (updatedMember) => {
        setFormData(prev => ({
            ...prev,
            principalMember: updatedMember
        }));
    };

    const handleFamilyMemberChange = (index, updatedMember) => {
        setFormData(prev => ({
            ...prev,
            familyMembers: prev.familyMembers.map((member, i) => 
                i === index ? updatedMember : member
            )
        }));
    };

    const addFamilyMember = () => {
        setFormData(prev => ({
            ...prev,
            familyMembers: [...prev.familyMembers, {
                name: '',
                dateOfBirth: '',
                gender: '',
                occupation: '',
                backgroundCheckDate: '',
                backgroundExpiryDate: '',
                hasCondition: false,
                condition: ''
            }]
        }));
    };

    const removeFamilyMember = (index) => {
        setFormData(prev => ({
            ...prev,
            familyMembers: prev.familyMembers.filter((_, i) => i !== index)
        }));
    };

    return (
        <form data-name="family-member-info-form" onSubmit={handleSubmit} className="form-container">
            <h2 className="text-2xl font-bold mb-6">Family Member Information</h2>

            <div className="mb-6">
                <h3 className="text-xl font-semibold mb-4">Principal Householder</h3>
                <FamilyMember
                    member={formData.principalMember}
                    onChange={handlePrincipalMemberChange}
                    isMainMember={true}
                />
                {errors.principalMember && (
                    <p className="form-error">{errors.principalMember}</p>
                )}
            </div>

            <div className="mb-6">
                <h3 className="text-xl font-semibold mb-4">Other Family Members</h3>
                {formData.familyMembers.map((member, index) => (
                    <FamilyMember
                        key={index}
                        member={member}
                        onChange={(updatedMember) => handleFamilyMemberChange(index, updatedMember)}
                        onRemove={() => removeFamilyMember(index)}
                    />
                ))}
                <button
                    type="button"
                    onClick={addFamilyMember}
                    className="btn-secondary"
                >
                    <i className="fas fa-plus mr-2"></i>Add Family Member
                </button>
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
