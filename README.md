# strongpwd

A package to check the strength of passwords.

## Installation

You can install the `strongpwd` package via npm:

```bash
npm install strongpwd
```

## Usage

```javascript
const checkPasswordStrength = require('strongpwd');

const password = "MySecurePassword123!";
const strength = checkPasswordStrength(password);
console.log("Password Strength:", strength);
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
