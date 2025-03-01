function UploadsAgreement({ onNext, onBack, initialData = {} }) {
    const [formData, setFormData] = React.useState({
        familyPicture: initialData.familyPicture || null,
        housePictures: initialData.housePictures || [],
        agreement: initialData.agreement || false
    });

    const [previews, setPreviews] = React.useState({
        familyPicture: initialData.familyPicturePreview || null,
        housePictures: initialData.housePicturesPreview || []
    });

    const [errors, setErrors] = React.useState({});

    const handleFamilyPictureChange = (file) => {
        if (file) {
            setFormData(prev => ({
                ...prev,
                familyPicture: file
            }));

            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviews(prev => ({
                    ...prev,
                    familyPicture: reader.result
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleHousePicturesChange = (file) => {
        if (file) {
            setFormData(prev => ({
                ...prev,
                housePictures: [...prev.housePictures, file]
            }));

            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviews(prev => ({
                    ...prev,
                    housePictures: [...prev.housePictures, reader.result]
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    const removeHousePicture = (index) => {
        setFormData(prev => ({
            ...prev,
            housePictures: prev.housePictures.filter((_, i) => i !== index)
        }));
        setPreviews(prev => ({
            ...prev,
            housePictures: prev.housePictures.filter((_, i) => i !== index)
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = {};

        if (!formData.agreement) {
            validationErrors.agreement = "You must agree to the terms and conditions";
        }

        if (Object.keys(validationErrors).length === 0) {
            try {
                storage.saveFamilyRegistrationStep(5, {
                    ...formData,
                    familyPicturePreview: previews.familyPicture,
                    housePicturesPreview: previews.housePictures
                });
                onNext(formData);
            } catch (error) {
                reportError(error);
            }
        } else {
            setErrors(validationErrors);
        }
    };

    return (
        <form data-name="uploads-agreement-form" onSubmit={handleSubmit} className="form-container">
            <h2 className="text-2xl font-bold mb-6">Uploads and Agreement</h2>

            <div className="mb-6">
                <FileUpload
                    label="Family Picture (Optional)"
                    accept="image/*"
                    onChange={handleFamilyPictureChange}
                    preview={previews.familyPicture}
                />
            </div>

            <div className="mb-6">
                <label className="form-label">House Pictures (Optional)</label>
                <FileUpload
                    label="Add House Picture"
                    accept="image/*"
                    onChange={handleHousePicturesChange}
                />
                
                {previews.housePictures.length > 0 && (
                    <div className="grid grid-cols-3 gap-4 mt-4">
                        {previews.housePictures.map((preview, index) => (
                            <div key={index} className="relative">
                                <img
                                    src={preview}
                                    alt={`House preview ${index + 1}`}
                                    className="w-full h-32 object-cover rounded"
                                />
                                <button
                                    type="button"
                                    onClick={() => removeHousePicture(index)}
                                    className="absolute top-2 right-2 bg-error-main rounded-full p-1"
                                >
                                    <i className="fas fa-times"></i>
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <div className="mb-6">
                <div className="bg-background-paper p-4 rounded">
                    <h3 className="text-lg font-semibold mb-4">Terms and Conditions</h3>
                    <div className="h-48 overflow-y-auto mb-4 text-sm text-gray-300">
                        {/* Add your terms and conditions text here */}
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                    </div>
                    <label className="flex items-center">
                        <input
                            type="checkbox"
                            checked={formData.agreement}
                            onChange={(e) => setFormData(prev => ({
                                ...prev,
                                agreement: e.target.checked
                            }))}
                            className="mr-2"
                        />
                        I agree to the terms and conditions
                    </label>
                    {errors.agreement && <p className="form-error mt-2">{errors.agreement}</p>}
                </div>
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
