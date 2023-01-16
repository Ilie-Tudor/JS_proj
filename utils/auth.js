const jwt = require("jsonwebtoken");
const ValidateToken = (token) => {
  try {
    const payload = jwt.verify(token, process.env.secret);
    return { userInfo: payload };
  } catch (err) {
    return { error: err };
  }
};

const ValidateAuthorization = (token, role = "client_user") => {
  const { userInfo, error } = ValidateToken(token);
  if (error) {
    return { error: error };
  } else {
    return { isAuthorized: userInfo.type === role };
  }
};

module.exports = {
  ValidateAuthorization,
  ValidateToken
};
