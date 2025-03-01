function FamilyProfile({ family, onEdit }) {
    return (
        <div data-name="family-profile" className="dashboard-card">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Family Profile</h2>
                <button onClick={onEdit} className="btn-secondary">
                    <i className="fas fa-edit mr-2"></i>Edit Profile
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Contact Information</h3>
                        <div className="space-y-2">
                            <p><span className="text-gray-400">Name:</span> {family.name}</p>
                            <p><span className="text-gray-400">Email:</span> {family.email}</p>
                            <p><span className="text-gray-400">Phone:</span> {family.phone}</p>
                            <p><span className="text-gray-400">Address:</span> {family.address}</p>
                            <p><span className="text-gray-400">City:</span> {family.city}</p>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-2">Preferences</h3>
                        <div className="space-y-2">
                            <p><span className="text-gray-400">Age Preference:</span> {family.agePreference}</p>
                            <p><span className="text-gray-400">Gender Preference:</span> {family.genderPreference}</p>
                            <p><span className="text-gray-400">Food Service:</span> {family.foodService ? 'Yes' : 'No'}</p>
                            <p><span className="text-gray-400">Special Diet:</span> {family.specialDiet ? 'Yes' : 'No'}</p>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-2">Background Information</h3>
                        <div className="space-y-2">
                            <p><span className="text-gray-400">Languages:</span> {family.languages}</p>
                            <p><span className="text-gray-400">Pets:</span> {family.pets || 'None'}</p>
                            <div>
                                <p className="text-gray-400 mb-1">Experience:</p>
                                <p className="text-sm">{family.experience || 'No experience provided'}</p>
                            </div>
                            <div>
                                <p className="text-gray-400 mb-1">Background:</p>
                                <p className="text-sm">{family.background || 'No background information provided'}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="space-y-4">
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Family Members</h3>
                        <div className="space-y-4">
                            <div className="border border-divider p-4 rounded">
                                <h4 className="text-md font-semibold mb-2">Principal Member</h4>
                                <div className="space-y-2">
                                    <p><span className="text-gray-400">Name:</span> {family.principalMember.name}</p>
                                    <p><span className="text-gray-400">Date of Birth:</span> {family.principalMember.dateOfBirth}</p>
                                    <p><span className="text-gray-400">Gender:</span> {family.principalMember.gender}</p>
                                    <p><span className="text-gray-400">Occupation:</span> {family.principalMember.occupation}</p>
                                    {family.principalMember.hasCondition && (
                                        <div>
                                            <p className="text-gray-400 mb-1">Medical Condition:</p>
                                            <p className="text-sm">{family.principalMember.condition}</p>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {family.familyMembers && family.familyMembers.length > 0 && (
                                <div>
                                    <h4 className="text-md font-semibold mb-2">Other Family Members</h4>
                                    {family.familyMembers.map((member, index) => (
                                        <div key={index} className="border border-divider p-4 rounded mb-3">
                                            <div className="space-y-2">
                                                <p><span className="text-gray-400">Name:</span> {member.name}</p>
                                                <p><span className="text-gray-400">Date of Birth:</span> {member.dateOfBirth}</p>
                                                <p><span className="text-gray-400">Gender:</span> {member.gender}</p>
                                                <p><span className="text-gray-400">Occupation:</span> {member.occupation}</p>
                                                {member.hasCondition && (
                                                    <div>
                                                        <p className="text-gray-400 mb-1">Medical Condition:</p>
                                                        <p className="text-sm">{member.condition}</p>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-2">Room Information</h3>
                        <div className="grid grid-cols-1 gap-3">
                            {family.rooms && family.rooms.map((room, index) => (
                                <div key={index} className="border border-divider p-4 rounded">
                                    <div className="space-y-2">
                                        <p><span className="text-gray-400">Room Type:</span> {room.type}</p>
                                        <p><span className="text-gray-400">Bed Type:</span> {room.bedType}</p>
                                        <div>
                                            <p className="text-gray-400 mb-1">Description:</p>
                                            <p className="text-sm">{room.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-2">Photos</h3>
                        <div className="space-y-3">
                            {family.familyPicturePreview && (
                                <div>
                                    <p className="text-gray-400 mb-2">Family Photo</p>
                                    <img
                                        src={family.familyPicturePreview}
                                        alt="Family"
                                        className="w-full h-48 object-cover rounded"
                                    />
                                </div>
                            )}
                            {family.housePicturesPreview && family.housePicturesPreview.length > 0 && (
                                <div>
                                    <p className="text-gray-400 mb-2">House Photos</p>
                                    <div className="grid grid-cols-2 gap-2">
                                        {family.housePicturesPreview.map((pic, index) => (
                                            <img
                                                key={index}
                                                src={pic}
                                                alt={`House ${index + 1}`}
                                                className="w-full h-32 object-cover rounded"
                                            />
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
