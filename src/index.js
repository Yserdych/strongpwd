// strongpwd.js

// Function to check the strength of a password
function checkPasswordStrength(password) {
    // Define regular expressions for various criteria
    const lengthRegex = /.{8,}/;
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const digitRegex = /[0-9]/;
    const specialCharRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

    // Check if password meets all criteria
    const isLengthValid = lengthRegex.test(password);
    const hasUppercase = uppercaseRegex.test(password);
    const hasLowercase = lowercaseRegex.test(password);
    const hasDigit = digitRegex.test(password);
    const hasSpecialChar = specialCharRegex.test(password);

    // Calculate overall strength score based on criteria met
    let strength = 0;
    if (isLengthValid) strength++;
    if (hasUppercase) strength++;
    if (hasLowercase) strength++;
    if (hasDigit) strength++;
    if (hasSpecialChar) strength++;

    // Return strength score
    return strength;
}

// Export the function for external use
module.exports = checkPasswordStrength;
