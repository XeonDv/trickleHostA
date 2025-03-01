function StudentManagement() {
    const [selectedStudent, setSelectedStudent] = React.useState(null);
    const [showDetails, setShowDetails] = React.useState(false);

    const handleStudentSelect = (student) => {
        setSelectedStudent(student);
        setShowDetails(true);
    };

    const handleStudentUpdate = (updatedStudent) => {
        try {
            // In a real app, this would be an API call
            setShowDetails(false);
            // Refresh student list
        } catch (error) {
            reportError(error);
        }
    };

    return (
        <div data-name="student-management">
            <StudentList onStudentSelect={handleStudentSelect} />
            
            {showDetails && selectedStudent && (
                <StudentDetails
                    student={selectedStudent}
                    onClose={() => setShowDetails(false)}
                    onUpdate={handleStudentUpdate}
                />
            )}
        </div>
    );
}
