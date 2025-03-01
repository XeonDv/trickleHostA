function App() {
    const path = window.location.pathname;

    const renderProtectedRoute = (component, role) => {
        return (
            <ProtectedRoute requiredRole={role}>
                {component}
            </ProtectedRoute>
        );
    };

    return (
        <div data-name="app">
            {path === '/' && <Home />}
            {path === '/login' && <Login />}
            {path === '/student' && <StudentLanding />}
            {path === '/family' && <FamilyLanding />}
            {path === '/register/student' && <StudentRegistration />}
            {path === '/register/family' && <FamilyRegistration />}
            {path === '/dashboard/student' && renderProtectedRoute(<StudentDashboard />, 'student')}
            {path === '/dashboard/family' && renderProtectedRoute(<FamilyDashboard />, 'family')}
            {path === '/dashboard/manager' && renderProtectedRoute(<ManagerDashboard />, 'manager')}
            {path === '/dashboard/coordinator' && renderProtectedRoute(<CoordinatorDashboard />, 'coordinator')}
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
