function FamilyManagement() {
    const [selectedFamily, setSelectedFamily] = React.useState(null);
    const [showDetails, setShowDetails] = React.useState(false);

    const handleFamilySelect = (family) => {
        setSelectedFamily(family);
        setShowDetails(true);
    };

    const handleFamilyUpdate = (updatedFamily) => {
        try {
            // In a real app, this would be an API call
            setShowDetails(false);
            // Refresh family list
        } catch (error) {
            reportError(error);
        }
    };

    return (
        <div data-name="family-management">
            <FamilyList onFamilySelect={handleFamilySelect} />
            
            {showDetails && selectedFamily && (
                <FamilyDetails
                    family={selectedFamily}
                    onClose={() => setShowDetails(false)}
                    onUpdate={handleFamilyUpdate}
                />
            )}
        </div>
    );
}
