// Export validation function
module.exports = function validatePostinput(data) {

    // Define Errors
    let errors = {};

    // Check properties
    if (!data.title) {
        errors.title = "Title field is required";
    }

    if (!data.content) {
        errors.content = "Content field is required";
    }

    // Return errors and isValid Boolean
    return {
        errors,
        isValid: !Object.keys(errors).length
    }

}