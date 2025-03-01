function DocumentUpload({ onNext, onBack, initialData = {} }) {
    const [formData, setFormData] = React.useState({
        selfPicture: initialData.selfPicture || null,
        passport: initialData.passport || null,
        visa: initialData.visa || null,
        flightTicket: initialData.flightTicket || null,
        agreement: initialData.agreement || false
    });

    const [previews, setPreviews] = React.useState({
        selfPicture: initialData.selfPicturePreview || null,
        passport: initialData.passportPreview || null,
        visa: initialData.visaPreview || null,
        flightTicket: initialData.flightTicketPreview || null
    });

    const [errors, setErrors] = React.useState({});

    const handleFileChange = (file, field) => {
        if (file) {
            setFormData(prev => ({
                ...prev,
                [field]: file
            }));

            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviews(prev => ({
                    ...prev,
                    [field]: reader.result
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = {};

        if (!formData.selfPicture) errors.selfPicture = "Self picture is required";
        if (!formData.passport) errors.passport = "Passport copy is required";
        if (!formData.agreement) errors.agreement = "You must agree to the terms";

        if (Object.keys(errors).length === 0) {
            try {
                storage.saveRegistrationStep(3, {
                    ...formData,
                    selfPicturePreview: previews.selfPicture,
                    passportPreview: previews.passport,
                    visaPreview: previews.visa,
                    flightTicketPreview: previews.flightTicket
                });
                onNext(formData);
            } catch (error) {
                reportError(error);
            }
        } else {
            setErrors(errors);
        }
    };

    return (
        <form data-name="document-upload-form" onSubmit={handleSubmit} className="form-container">
            <h2 className="text-2xl font-bold mb-6">Document Upload</h2>

            <FileUpload
                label="Self Picture (Required)"
                accept="image/*"
                onChange={(file) => handleFileChange(file, 'selfPicture')}
                preview={previews.selfPicture}
            />
            {errors.selfPicture && <p className="form-error">{errors.selfPicture}</p>}

            <FileUpload
                label="Passport Copy (Required)"
                accept=".pdf,image/*"
                onChange={(file) => handleFileChange(file, 'passport')}
                preview={previews.passport}
            />
            {errors.passport && <p className="form-error">{errors.passport}</p>}

            <FileUpload
                label="Visa Copy (Optional)"
                accept=".pdf,image/*"
                onChange={(file) => handleFileChange(file, 'visa')}
                preview={previews.visa}
            />

            <FileUpload
                label="Flight Ticket (Optional)"
                accept=".pdf,image/*"
                onChange={(file) => handleFileChange(file, 'flightTicket')}
                preview={previews.flightTicket}
            />

            <div className="mb-6">
                <label className="flex items-center space-x-2">
                    <input
                        type="checkbox"
                        checked={formData.agreement}
                        onChange={(e) => setFormData(prev => ({
                            ...prev,
                            agreement: e.target.checked
                        }))}
                    />
                    <span>I agree to the terms and conditions</span>
                </label>
                {errors.agreement && <p className="form-error">{errors.agreement}</p>}
            </div>

            <div className="flex justify-between gap-4">
                <button type="button" onClick={onBack} className="btn-secondary w-full">
                    Back
                </button>
                <button type="submit" className="btn-primary w-full">
                    Complete Registration
                </button>
            </div>
        </form>
    );
}
