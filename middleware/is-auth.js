const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if(!token) return res.status(401).send("Authorization failed : No header found!");
    
    jwt.verify(token, "b5508b33965648eca9f41a78fddd0b4745d39def1f641aee61ea31db49388183", (err, user) => {
      if(!err) {
        req.user = user;
        next();
      } else {
        return res.status(401).send("Unauthorized!");
      }
    })
}