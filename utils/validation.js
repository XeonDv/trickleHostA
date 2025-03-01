const validation = {
    isValidEmail: function(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    },

    isValidPassword: function(password) {
        return password.length >= 8;
    },

    isValidPhone: function(phone) {
        const phoneRegex = /^\+?[\d\s-]{10,}$/;
        return phoneRegex.test(phone);
    },

    isValidDate: function(date) {
        const dateObj = new Date(date);
        return dateObj instanceof Date && !isNaN(dateObj);
    },

    validateBasicInfo: function(data) {
        const errors = {};
        
        if (!data.name?.trim()) errors.name = "Name is required";
        if (!data.email?.trim()) errors.email = "Email is required";
        else if (!this.isValidEmail(data.email)) errors.email = "Invalid email format";
        if (!data.password) errors.password = "Password is required";
        else if (!this.isValidPassword(data.password)) errors.password = "Password must be at least 8 characters";
        if (!data.startDate) errors.startDate = "Start date is required";
        if (!data.endDate) errors.endDate = "End date is required";
        if (!data.city?.trim()) errors.city = "City is required";

        return errors;
    },

    validateAdditionalInfo: function(data) {
        const errors = {};
        
        if (!data.phone?.trim()) errors.phone = "Phone number is required";
        else if (!this.isValidPhone(data.phone)) errors.phone = "Invalid phone number";
        if (!data.dateOfBirth) errors.dateOfBirth = "Date of birth is required";
        if (!data.nationality?.trim()) errors.nationality = "Nationality is required";
        if (!data.emergencyContactName?.trim()) errors.emergencyContactName = "Emergency contact name is required";
        if (!data.emergencyContactPhone?.trim()) errors.emergencyContactPhone = "Emergency contact phone is required";

        return errors;
    }
};
