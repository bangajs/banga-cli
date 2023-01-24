const jwt = require("jsonwebtoken");
const User = require("./../models/user.model");
const config = require("./../config")
const { CustomError } = require("./../utils");


/**
 * If no role is passed the default role is user
 * 
 * @param  {any[]} roles List of roles allowed to access the route
 * @param  {boolean} idor Route is only accessible to resource owner
 */
function auth(roles = [], idor = false) {
  return async (req, res, next) => {
    if (!req.headers.authorization) throw new CustomError("Token not found", 401);

    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, config.jwt.AUTH_SECRET);
    if (!decoded)
      throw new CustomError("Invalid token", 401);

    // Find and check if user exits
    const user = await User.findOne({ _id: decoded.user_id }).lean();
    if (!user)
      throw new CustomError("User does not exist", 401);

    // Check if user status is "active"
    if (user.status.toUpperCase() !== config.user_status.ACTIVE)
      throw new CustomError("User has been deactivated", 403);

    // Check if user mail is verified
    if (!user.has_verified_email)
      throw new CustomError("User email is unverified", 403);

    // Check if route is IDOR enabled 
    const requesting_user = req.params.user_id || req.body.user_id || req.query.user_id
    if (idor && requesting_user !== user._id.toHexString())
      throw new CustomError("Cannot access this resource", 403);

    // Check if user role is included in the roles array
    roles = Array.isArray(roles) && roles.length > 0 ? roles : config.role.USER
    if (!roles.includes(user.role.toUpperCase()))
      throw new CustomError("User access denied", 403)

    req.body.USER_ID = user._id

    next();
  }
}


module.exports = auth