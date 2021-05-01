module.exports = (req, res, next) => {
    // 401 - Unauthorized
    if(!req.session.isAdmin) return res.sendStatus(401);      
    next();
}