function StudentDashboard() {
    const [student, setStudent] = React.useState(() => {
        try {
            return storage.getStudent();
        } catch (error) {
            reportError(error);
            return null;
        }
    });

    const [activeTab, setActiveTab] = React.useState('profile');

    const handleEditProfile = () => {
        // Implement edit profile logic
    };

    const handleSubmitReview = (review) => {
        try {
            const updatedStudent = {
                ...student,
                reviews: [...(student.reviews || []), {
                    ...review,
                    date: new Date().toISOString()
                }]
            };
            storage.saveStudent(updatedStudent);
            setStudent(updatedStudent);
        } catch (error) {
            reportError(error);
        }
    };

    if (!student) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">Access Denied</h2>
                    <p className="text-gray-400 mb-4">Please login or complete registration first.</p>
                    <a href="/register/student" className="btn-primary">
                        Register Now
                    </a>
                </div>
            </div>
        );
    }

    return (
        <div data-name="student-dashboard" className="min-h-screen py-20 px-4">
            <div className="container mx-auto">
                <div className="dashboard-header">
                    <h1 className="text-3xl font-bold">Welcome, {student.name}</h1>
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
                        className={`dashboard-nav-item ${activeTab === 'homestay' ? 'active' : ''}`}
                        onClick={() => setActiveTab('homestay')}
                    >
                        Homestay
                    </button>
                    <button
                        className={`dashboard-nav-item ${activeTab === 'reviews' ? 'active' : ''}`}
                        onClick={() => setActiveTab('reviews')}
                    >
                        Reviews
                    </button>
                </div>

                {activeTab === 'profile' && (
                    <StudentProfile
                        student={student}
                        onEdit={handleEditProfile}
                    />
                )}

                {activeTab === 'homestay' && (
                    <HomestayInfo
                        homestay={student.homestay}
                    />
                )}

                {activeTab === 'reviews' && (
                    <Reviews
                        reviews={student.reviews || []}
                        onSubmitReview={handleSubmitReview}
                    />
                )}
            </div>
        </div>
    );
}
