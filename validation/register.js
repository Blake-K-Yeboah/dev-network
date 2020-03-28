// Export Validation Function
module.exports = function validateRegisterInput(data) {

    // Username Check Function (for symbols)
    const usernameCheck = () => {
        let result = true;
        let disallowedSymbols = ['@', '.', ',', '!', '%', '$', '#', '^', '&', '*', '(', ')'];

        if (data.username) {
            disallowedSymbols.forEach(symbol => {
                if (data.username.includes(symbol)) {
                    result = false;
                }
            });
        } else {
            return false
        }

        return result;
    }

    // Define Errors
    let errors = {}

    // Check Different Properties
    if (!data.firstname) {
        errors.firstname = "First name field is required";

    }

    if (!data.lastname) {
        errors.lastname = "Last name field is requried";
    }

    if (!data.username || !usernameCheck()) {
        errors.username = "Username field doesn't meet requirements.";
    }

    if (!data.email || !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data.email)) {
        errors.email = "Email is not valid";
    }

    if (!data.password) {
        errors.password = "Password field is required";
    }

    if (data.password && !data.password.length >= 8 && !data.password.length <= 30) {
        errors.password = "Password must be at least 8 characters";
    }

    // Return errors and isValid Boolean
    return {
        errors,
        isValid: !Object.keys(errors).length
    }
}