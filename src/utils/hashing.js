
const crypto = require('crypto');

module.exports = {
  generateHash(password) {
    ;
    const hash = crypto.pbkdf2Sync(password, process.env.SALT,
      1000, 64, `sha512`).toString('hex');

    return hash.toString();
  },
  validateHash(password, hash){
    const calculatedHash = crypto.pbkdf2Sync(password,
      process.env.SALT, 1000, 64, `sha512`).toString(`hex`);

    return hash === calculatedHash;
  }
}


