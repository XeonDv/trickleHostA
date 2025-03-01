function FormProgress({ currentStep, totalSteps }) {
    return (
        <div data-name="form-progress" className="mb-8">
            <div className="flex justify-between items-center">
                {[...Array(totalSteps)].map((_, index) => (
                    <div key={index} className="flex items-center">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            index + 1 <= currentStep ? 'bg-primary-main' : 'bg-gray-700'
                        }`}>
                            {index + 1}
                        </div>
                        {index < totalSteps - 1 && (
                            <div className={`h-1 w-16 ${
                                index + 1 < currentStep ? 'bg-primary-main' : 'bg-gray-700'
                            }`}></div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
