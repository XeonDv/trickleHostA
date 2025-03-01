function PairingManagement() {
    const [showCreateModal, setShowCreateModal] = React.useState(false);

    const handleCreatePairing = (pairingData) => {
        try {
            // In a real app, this would be an API call
            setShowCreateModal(false);
            // Refresh pairing list
        } catch (error) {
            reportError(error);
        }
    };

    return (
        <div data-name="pairing-management">
            <div className="flex justify-end mb-6">
                <button
                    onClick={() => setShowCreateModal(true)}
                    className="btn-primary"
                >
                    <i className="fas fa-plus mr-2"></i>
                    Create New Pairing
                </button>
            </div>

            <PairingList />
            
            {showCreateModal && (
                <CreatePairing
                    onClose={() => setShowCreateModal(false)}
                    onSubmit={handleCreatePairing}
                />
            )}
        </div>
    );
}
