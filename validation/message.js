// Export validation function
module.exports = function validateMessageinput(data) {

    // Define Errors
    let errors = {};

    // Check properties
    if (!data.text) {
        errors.text = "Message field is required";
    }

    // Return errors and isValid Boolean
    return {
        errors,
        isValid: !Object.keys(errors).length
    }

}