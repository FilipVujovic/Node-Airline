exports.getLogin = (req, res, next) => {
    // const isLoggedIn = req.get('Cookie').split(';')[1].trim().split('=')[1];
    console.log(req.session);
}

exports.postLogin = (req, res, next) => {
    req.session.loggedIn = true;
    res.redirect('/');
}