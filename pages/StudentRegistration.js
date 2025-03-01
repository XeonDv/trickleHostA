function StudentRegistration() {
    const [step, setStep] = React.useState(1);
    const [formData, setFormData] = React.useState(() => {
        try {
            const savedData = localStorage.getItem('studentRegistration');
            return savedData ? JSON.parse(savedData) : {};
        } catch (error) {
            reportError(error);
            return {};
        }
    });

    React.useEffect(() => {
        try {
            localStorage.setItem('studentRegistration', JSON.stringify(formData));
        } catch (error) {
            reportError(error);
        }
    }, [formData]);

    const handleNext = async (stepData) => {
        try {
            const newFormData = { ...formData, ...stepData };
            setFormData(newFormData);
            
            if (step === 3) {
                // Final step - save to database
                const studentData = {
                    ...newFormData,
                    status: 'new_lead',
                    createdAt: new Date().toISOString()
                };
                await database.create('students', studentData);
                
                // Clear local storage
                localStorage.removeItem('studentRegistration');
                
                // Redirect to dashboard
                window.location.href = '/dashboard/student';
            } else {
                setStep(prev => prev + 1);
            }
        } catch (error) {
            reportError(error);
            alert('An error occurred while saving your registration. Please try again.');
        }
    };

    const handleBack = () => {
        setStep(prev => prev - 1);
    };

    return (
        <div data-name="student-registration" className="min-h-screen py-20 px-4">
            <div className="container mx-auto">
                <FormProgress currentStep={step} totalSteps={3} />

                <div className="form-container student-form">
                    {step === 1 && (
                        <BasicInfo
                            onNext={handleNext}
                            initialData={formData}
                            type="student"
                        />
                    )}

                    {step === 2 && (
                        <AdditionalInfo
                            onNext={handleNext}
                            onBack={handleBack}
                            initialData={formData}
                            type="student"
                        />
                    )}

                    {step === 3 && (
                        <DocumentUpload
                            onNext={handleNext}
                            onBack={handleBack}
                            initialData={formData}
                            type="student"
                        />
                    )}
                </div>
            </div>
        </div>
    );
}
