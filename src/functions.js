const crypto = require('crypto');

const Functions = {

    makeGravatar(email) {
        if (email) {
            let emailStr = email.trim();

            emailStr = email.toLowerCase();
            let hashStr = crypto.createHash('md5').update(emailStr).digest('hex');

            return "https://www.gravatar.com/avatar/" + hashStr;
        }
        return "false";
    }
};

module.exports = Functions;
