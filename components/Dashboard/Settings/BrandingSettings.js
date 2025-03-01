function BrandingSettings() {
    const [settings, setSettings] = React.useState(() => {
        const user = auth.getCurrentUser();
        return user?.branding || {
            welcomeText: '',
            phoneNumber: '',
            logo: ''
        };
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSettings(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleLogoChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setSettings(prev => ({
                    ...prev,
                    logo: reader.result
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            const user = auth.getCurrentUser();
            if (user) {
                user.branding = settings;
                localStorage.setItem('currentUser', JSON.stringify(user));
                alert('Branding settings updated successfully!');
            }
        } catch (error) {
            reportError(error);
            alert('Failed to update branding settings');
        }
    };

    return (
        <div data-name="branding-settings" className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="form-label">Welcome Text</label>
                    <textarea
                        name="welcomeText"
                        value={settings.welcomeText}
                        onChange={handleChange}
                        className="form-input h-32"
                        placeholder="Enter welcome message for your landing page"
                    ></textarea>
                </div>

                <div>
                    <label className="form-label">Phone Number</label>
                    <input
                        type="tel"
                        name="phoneNumber"
                        value={settings.phoneNumber}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="Enter your contact number"
                    />
                </div>

                <div>
                    <label className="form-label">Logo</label>
                    <div className="flex items-center space-x-4">
                        {settings.logo && (
                            <img
                                src={settings.logo}
                                alt="Logo preview"
                                className="w-16 h-16 object-contain"
                            />
                        )}
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleLogoChange}
                            className="form-input"
                        />
                    </div>
                </div>

                <button type="submit" className="btn-primary">
                    Save Changes
                </button>
            </form>

            <div className="mt-8 p-6 border border-divider rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Preview</h3>
                <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                        {settings.logo && (
                            <img
                                src={settings.logo}
                                alt="Company logo"
                                className="w-12 h-12 object-contain"
                            />
                        )}
                        <div>
                            <h4 className="font-semibold">Contact Information</h4>
                            <p className="text-gray-400">{settings.phoneNumber}</p>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-semibold">Welcome Message</h4>
                        <p className="text-gray-400">{settings.welcomeText}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
