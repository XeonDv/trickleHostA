function FamilyDashboard() {
    const [family, setFamily] = React.useState(() => {
        try {
            const savedData = localStorage.getItem('familyData');
            return savedData ? JSON.parse(savedData) : null;
        } catch (error) {
            reportError(error);
            return null;
        }
    });

    const [activeTab, setActiveTab] = React.useState('profile');
    const [assignedStudents, setAssignedStudents] = React.useState([
        // Example data - replace with actual API call
        {
            id: 1,
            name: "John Doe",
            country: "Japan",
            startDate: "2024-02-01",
            endDate: "2024-08-01",
            status: "active"
        }
    ]);

    const handleEditProfile = () => {
        // Implement edit profile logic
    };

    const handleSubmitReview = (review) => {
        try {
            const updatedFamily = {
                ...family,
                reviews: [...(family.reviews || []), {
                    ...review,
                    date: new Date().toISOString()
                }]
            };
            localStorage.setItem('familyData', JSON.stringify(updatedFamily));
            setFamily(updatedFamily);
        } catch (error) {
            reportError(error);
        }
    };

    if (!family) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">Access Denied</h2>
                    <p className="text-gray-400 mb-4">Please login or complete registration first.</p>
                    <a href="/register/family" className="btn-primary">
                        Register Now
                    </a>
                </div>
            </div>
        );
    }

    return (
        <div data-name="family-dashboard" className="min-h-screen py-20 px-4">
            <div className="container mx-auto">
                <div className="dashboard-header">
                    <h1 className="text-3xl font-bold">Welcome, {family.name}</h1>
                    <button className="btn-secondary">
                        <i className="fas fa-sign-out-alt mr-2"></i>Logout
                    </button>
                </div>

                <div className="dashboard-nav">
                    <button
                        className={`dashboard-nav-item ${activeTab === 'profile' ? 'active' : ''}`}
                        onClick={() => setActiveTab('profile')}
                    >
                        Profile
                    </button>
                    <button
                        className={`dashboard-nav-item ${activeTab === 'students' ? 'active' : ''}`}
                        onClick={() => setActiveTab('students')}
                    >
                        Students
                    </button>
                    <button
                        className={`dashboard-nav-item ${activeTab === 'reviews' ? 'active' : ''}`}
                        onClick={() => setActiveTab('reviews')}
                    >
                        Reviews
                    </button>
                </div>

                {activeTab === 'profile' && (
                    <FamilyProfile
                        family={family}
                        onEdit={handleEditProfile}
                    />
                )}

                {activeTab === 'students' && (
                    <div className="dashboard-card">
                        <h2 className="text-2xl font-bold mb-6">Assigned Students</h2>
                        <div className="grid gap-4">
                            {assignedStudents.map(student => (
                                <div key={student.id} className="border border-divider p-4 rounded-lg">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="text-lg font-semibold">{student.name}</h3>
                                            <p className="text-gray-400">From {student.country}</p>
                                            <div className="mt-2 space-y-1">
                                                <p><span className="text-gray-400">Start Date:</span> {student.startDate}</p>
                                                <p><span className="text-gray-400">End Date:</span> {student.endDate}</p>
                                            </div>
                                        </div>
                                        <span className={`px-3 py-1 rounded-full text-sm ${
                                            student.status === 'active' ? 'bg-success-main' : 'bg-warning-main'
                                        }`}>
                                            {student.status}
                                        </span>
                                    </div>
                                </div>
                            ))}
                            {assignedStudents.length === 0 && (
                                <p className="text-gray-400 text-center py-8">
                                    No students assigned yet
                                </p>
                            )}
                        </div>
                    </div>
                )}

                {activeTab === 'reviews' && (
                    <Reviews
                        reviews={family.reviews || []}
                        onSubmitReview={handleSubmitReview}
                    />
                )}
            </div>
        </div>
    );
}
