const speakeasy = require("speakeasy");
const qrcode = require("qrcode");
const config = require("../../../config");

const otpauth_url = config.otpAuthUrl;
const generateQr = () => {
  return new Promise((resolve, reject) => {
    qrcode.toDataURL(otpauth_url, (error, data) => {
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    });
  });
};

const verify = (secret, token) => {
  return speakeasy.totp.verify({
    secret: secret,
    encoding: "ascii",
    token: token,
  });
};

module.exports = {
  generateQr,
  verify,
};
