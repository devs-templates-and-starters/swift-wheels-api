const { randomBytes, createHmac } = require('crypto');

exports.encrypt = (actualText) => {
  const salt = randomBytes(16).toString('base64');
  const hash = createHmac('sha512', salt).update(actualText).digest('base64');
  return `${salt}$${hash}`;
};

exports.decrypt = (encryptedText, actualText) => {
  const [salt, hash] = encryptedText.split('$');
  const actualHash = createHmac('sha512', salt)
    .update(actualText)
    .digest('base64');
  return actualHash === hash;
};
