const crypto = require('crypto');

class CryptoUtils {
  static generateKey() {
    return crypto.randomBytes(32);
  }

  static computeHMAC(key, message) {
    return crypto.createHmac('sha256', key).update(message).digest('hex');
  }
}

module.exports = CryptoUtils;
