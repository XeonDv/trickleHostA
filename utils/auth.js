const auth = {
    login: async function(email, password) {
        try {
            // In production, this should be an API call
            const user = mockData.users.find(u => 
                u.email === email && u.password === password
            );
            
            if (user) {
                const { password, ...userData } = user;
                localStorage.setItem('currentUser', JSON.stringify(userData));
                localStorage.setItem('authToken', 'mock-jwt-token'); // In production, this would be a real JWT
                return { success: true, user: userData };
            }
            
            throw new Error('Invalid email or password');
        } catch (error) {
            reportError(error);
            return { 
                success: false, 
                error: error.message || 'An error occurred during login'
            };
        }
    },

    logout: function() {
        try {
            localStorage.removeItem('currentUser');
            localStorage.removeItem('authToken');
            window.location.href = '/login';
            return { success: true };
        } catch (error) {
            reportError(error);
            return { 
                success: false, 
                error: 'An error occurred during logout' 
            };
        }
    },

    getCurrentUser: function() {
        try {
            const userData = localStorage.getItem('currentUser');
            return userData ? JSON.parse(userData) : null;
        } catch (error) {
            reportError(error);
            return null;
        }
    },

    isAuthenticated: function() {
        return !!localStorage.getItem('authToken');
    },

    isManager: function() {
        const user = this.getCurrentUser();
        return user && user.type === 'manager';
    },

    isCoordinator: function() {
        const user = this.getCurrentUser();
        return user && (user.type === 'coordinator' || user.type === 'manager');
    },

    redirectToLogin: function() {
        window.location.href = '/login';
    }
};
