module.exports = (req, res, next) => {
    
    // 401 - Unauthorized
    console.log(req.user);
    if(req.user && !req.user.role.admin) {
        next(new Error('You are not an admin'));
      } else {
        next();
      }
}