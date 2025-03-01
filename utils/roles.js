const roles = {
    isManager: function(user) {
        return user && user.type === 'manager';
    },

    isCoordinator: function(user) {
        return user && (user.type === 'coordinator' || user.type === 'manager');
    },

    checkManagerAccess: function() {
        const user = auth.getCurrentUser();
        if (!this.isManager(user)) {
            window.location.href = '/login';
            return false;
        }
        return true;
    },

    checkCoordinatorAccess: function() {
        const user = auth.getCurrentUser();
        if (!this.isCoordinator(user)) {
            window.location.href = '/login';
            return false;
        }
        return true;
    }
};
