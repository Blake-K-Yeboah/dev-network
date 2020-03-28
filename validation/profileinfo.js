// Export Validation Function
module.exports = function validateProfileInfoInput(data) {

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

    // Return errors and isValid Boolean
    return {
        errors,
        isValid: !Object.keys(errors).length
    }
}