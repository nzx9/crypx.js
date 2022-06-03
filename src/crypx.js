const crypto = require("crypto");
const fs = require("fs");

const encryptFile = (plain_file, key, algorithm, unicode = "utf8") => {
  const _key = crypto
    .createHash("sha256")
    .update(String(key))
    .digest("base64")
    .substr(0, 32);

  const file_content = fs.readFileSync(plain_file, unicode);
  const buffer = Buffer.from(file_content);
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv(algorithm, _key, iv);
  const result = Buffer.concat([iv, cipher.update(buffer), cipher.final()]);
  return result;
};

const decryptFile = (encrypted_file, key, algorithm) => {
  const _key = crypto
    .createHash("sha256")
    .update(String(key))
    .digest("base64")
    .substr(0, 32);
  const file_content = fs.readFileSync(encrypted_file);
  let buffer = Buffer.from(file_content);
  const iv = buffer.slice(0, 16);
  buffer = buffer.slice(16);
  const decipher = crypto.createDecipheriv(algorithm, _key, iv);
  const result = Buffer.concat([decipher.update(buffer), decipher.final()]);
  return result;
};

module.exports = { encryptFile, decryptFile };
