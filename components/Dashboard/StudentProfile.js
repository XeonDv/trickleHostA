function StudentProfile({ student, onEdit }) {
    return (
        <div data-name="student-profile" className="dashboard-card">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Student Profile</h2>
                <button onClick={onEdit} className="btn-secondary">
                    <i className="fas fa-edit mr-2"></i>Edit Profile
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Personal Information</h3>
                        <div className="space-y-2">
                            <p><span className="text-gray-400">Name:</span> {student.name}</p>
                            <p><span className="text-gray-400">Email:</span> {student.email}</p>
                            <p><span className="text-gray-400">Phone:</span> {student.phone}</p>
                            <p><span className="text-gray-400">Date of Birth:</span> {student.dateOfBirth}</p>
                            <p><span className="text-gray-400">Gender:</span> {student.gender}</p>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-2">Stay Details</h3>
                        <div className="space-y-2">
                            <p><span className="text-gray-400">Start Date:</span> {student.startDate}</p>
                            <p><span className="text-gray-400">End Date:</span> {student.endDate}</p>
                            <p><span className="text-gray-400">City:</span> {student.city}</p>
                        </div>
                    </div>
                </div>

                <div className="space-y-4">
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Academic Information</h3>
                        <div className="space-y-2">
                            <p><span className="text-gray-400">School:</span> {student.school}</p>
                            <p><span className="text-gray-400">Agency:</span> {student.agency || 'N/A'}</p>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-2">Preferences</h3>
                        <div className="space-y-2">
                            <p><span className="text-gray-400">Accommodation:</span> {student.accommodationType}</p>
                            <p><span className="text-gray-400">Meal Plan:</span> {student.mealPlan}</p>
                            <div className="flex flex-wrap gap-2">
                                {student.smokers && <span className="px-2 py-1 bg-gray-700 rounded-full text-sm">Smokers OK</span>}
                                {student.children && <span className="px-2 py-1 bg-gray-700 rounded-full text-sm">Children OK</span>}
                                {student.teenagers && <span className="px-2 py-1 bg-gray-700 rounded-full text-sm">Teenagers OK</span>}
                                {student.pets && <span className="px-2 py-1 bg-gray-700 rounded-full text-sm">Pets OK</span>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
