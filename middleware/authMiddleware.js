// Middleware function to check if the user is authenticated
const ensureAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    // If the user is authenticated, proceed to the next middleware/route handler
    return next();
  }
  // If the user is not authenticated, redirect them to the login page
  res.redirect("/auth/login");
};

module.exports = { ensureAuthenticated };
