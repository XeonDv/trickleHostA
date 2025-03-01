function FamilyRegistration() {
    const [step, setStep] = React.useState(1);
    const [formData, setFormData] = React.useState(() => {
        try {
            const savedData = storage.getFamily();
            return savedData || {};
        } catch (error) {
            reportError(error);
            return {};
        }
    });

    const handleNext = (stepData) => {
        try {
            storage.saveFamilyRegistrationStep(step, stepData);
            setFormData(prev => ({ ...prev, ...stepData }));
            setStep(prev => prev + 1);
        } catch (error) {
            reportError(error);
        }
    };

    const handleBack = () => {
        setStep(prev => prev - 1);
    };

    const handleComplete = async (finalData) => {
        try {
            const completeData = { ...formData, ...finalData, status: 'pending', type: 'family' };
            storage.saveFamily(completeData);
            window.location.href = '/dashboard/family';
        } catch (error) {
            reportError(error);
        }
    };

    return (
        <div data-name="family-registration" className="min-h-screen py-20 px-4">
            <div className="container mx-auto">
                <FormProgress currentStep={step} totalSteps={5} />

                <div className="form-container family-form">
                    {step === 1 && (
                        <BasicInfo
                            onNext={handleNext}
                            initialData={formData}
                            type="family"
                        />
                    )}

                    {step === 2 && (
                        <AdditionalInfo
                            onNext={handleNext}
                            onBack={handleBack}
                            initialData={formData}
                            type="family"
                        />
                    )}

                    {step === 3 && (
                        <FamilyMemberInfo
                            onNext={handleNext}
                            onBack={handleBack}
                            initialData={formData}
                        />
                    )}

                    {step === 4 && (
                        <RoomInfo
                            onNext={handleNext}
                            onBack={handleBack}
                            initialData={formData}
                        />
                    )}

                    {step === 5 && (
                        <UploadsAgreement
                            onNext={handleComplete}
                            onBack={handleBack}
                            initialData={formData}
                            type="family"
                        />
                    )}
                </div>
            </div>
        </div>
    );
}
