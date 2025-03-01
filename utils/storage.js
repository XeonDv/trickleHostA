const storage = {
    saveStudent: function(studentData) {
        try {
            localStorage.setItem('studentData', JSON.stringify(studentData));
            return true;
        } catch (error) {
            reportError(error);
            return false;
        }
    },

    getStudent: function() {
        try {
            const data = localStorage.getItem('studentData');
            return data ? JSON.parse(data) : null;
        } catch (error) {
            reportError(error);
            return null;
        }
    },

    saveStudentRegistrationStep: function(step, data) {
        try {
            const currentData = this.getStudent() || {};
            const updatedData = { ...currentData, ...data, currentStep: step };
            return this.saveStudent(updatedData);
        } catch (error) {
            reportError(error);
            return false;
        }
    },

    saveFamily: function(familyData) {
        try {
            localStorage.setItem('familyData', JSON.stringify(familyData));
            return true;
        } catch (error) {
            reportError(error);
            return false;
        }
    },

    getFamily: function() {
        try {
            const data = localStorage.getItem('familyData');
            return data ? JSON.parse(data) : null;
        } catch (error) {
            reportError(error);
            return null;
        }
    },

    saveFamilyRegistrationStep: function(step, data) {
        try {
            const currentData = this.getFamily() || {};
            const updatedData = { ...currentData, ...data, currentStep: step };
            return this.saveFamily(updatedData);
        } catch (error) {
            reportError(error);
            return false;
        }
    },

    clearStudent: function() {
        try {
            localStorage.removeItem('studentData');
            return true;
        } catch (error) {
            reportError(error);
            return false;
        }
    },

    clearFamily: function() {
        try {
            localStorage.removeItem('familyData');
            return true;
        } catch (error) {
            reportError(error);
            return false;
        }
    }
};
