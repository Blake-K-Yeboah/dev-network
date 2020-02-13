// Export validation function
module.exports = function validateProjectinput(data) {

    // Define Errors
    let errors = {};

    // Check properties
    if (!data.title) {
        errors.title = "Title field is required";
    }

    if (!data.description) {
        errors.description = "Description field is required";
    }

    if (!data.tags) {
        errors.tags = "Tags field is required";
    }

    // Return errors and isValid Boolean
    return {
        errors,
        isValid: !Object.keys(errors).length
    }

}