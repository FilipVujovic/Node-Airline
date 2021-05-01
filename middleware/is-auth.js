module.exports = (req, res, next) => {
    // 401 - Unauthorized
    if(!req.session.isLoggedIn) return res.sendStatus(401);      
    next();
}