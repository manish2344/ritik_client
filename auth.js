const jwt = require("jsonwebtoken");

exports.authenticateUser = (req, res, next) => {
  if (!req.headers.accesstoken)
    return res.status(400).send({ msg: "Token not found" });
  try {
    const user = jwt.verify(req.headers.accesstoken, process.env.SECRET_KEY);
    next();
  } catch (err) {
    console.error(err);
    return res.status(400).send({ msg: "Unauthorised" });
  }
};

exports.authorizeUser = (req, res, next) => {
  if (req.body.currentuser.role === "admin") next();
  else
    return res
      .status(404)
      .send({ msg: "Forbidden : No permission to access API" });
};