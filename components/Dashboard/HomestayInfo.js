function HomestayInfo({ homestay }) {
    if (!homestay) {
        return (
            <div data-name="homestay-info-empty" className="dashboard-card">
                <div className="text-center py-8">
                    <i className="fas fa-home text-4xl text-gray-600 mb-4"></i>
                    <h2 className="text-xl font-semibold mb-2">No Homestay Assigned Yet</h2>
                    <p className="text-gray-400">
                        We are currently matching you with the perfect host family.
                        You will be notified once a match is found.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div data-name="homestay-info" className="dashboard-card">
            <h2 className="text-2xl font-bold mb-6">Your Homestay Family</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <div className="mb-6">
                        <h3 className="text-lg font-semibold mb-3">Host Family</h3>
                        <div className="space-y-2">
                            <p><span className="text-gray-400">Family Name:</span> {homestay.familyName}</p>
                            <p><span className="text-gray-400">Phone:</span> {homestay.phone}</p>
                            <p><span className="text-gray-400">Languages:</span> {homestay.languages.join(', ')}</p>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-3">Location</h3>
                        <div className="space-y-2">
                            <p><span className="text-gray-400">Address:</span> {homestay.address}</p>
                            <p><span className="text-gray-400">City:</span> {homestay.city}</p>
                            <p><span className="text-gray-400">Distance to School:</span> {homestay.distanceToSchool}</p>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="mb-6">
                        <h3 className="text-lg font-semibold mb-3">Your Room</h3>
                        <div className="space-y-2">
                            <p><span className="text-gray-400">Room Type:</span> {homestay.roomType}</p>
                            <p><span className="text-gray-400">Bed Type:</span> {homestay.bedType}</p>
                            <p><span className="text-gray-400">Amenities:</span> {homestay.amenities.join(', ')}</p>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-3">House Rules</h3>
                        <ul className="list-disc list-inside space-y-1 text-gray-300">
                            {homestay.houseRules.map((rule, index) => (
                                <li key={index}>{rule}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
