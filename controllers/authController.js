const User = require('../models/user');
const bcrypt = require('bcryptjs');

exports.getLogin = (req, res, next) => {
    // const isLoggedIn = req.get('Cookie').split(';')[1].trim().split('=')[1];
    console.log(req.session);
};


// Sto se tice postLogin metode, u svakom slucaju cemo uci u then blok compare metode.
// Compare metoda vraca true ili false u zavisnosti od prosledjene sifre.
exports.postLogin = (req, res, next) => {
    const password = req.body.password;
    const email = req.body.email;
    console.log(email.split('@')[1]);
    User.findOne({ where: { email: email } })
    .then(user => {
        if (!user) {
            console.log(user);
            console.log('User not found!');
            return res.sendStatus(400);
        }
        bcrypt
          .compare(password, user.password)
          .then(doMatch => {
            if (doMatch) {
                if(email.split('@')[1] == 'jakarta.com') {
                    req.session.isLoggedIn = true;
                    req.session.isAdmin = true;
                    req.session.user = user;
                    return req.session.save(err => {
                      console.log(err);
                      res.sendStatus(200);
                    });
                } else {
                    req.session.isLoggedIn = true;
                    req.session.user = user;
                    return req.session.save(err => {
                      console.log(err);
                      res.sendStatus(200);
                    });
                }
            }
            console.log('Incorrect password!');
            res.sendStatus(400);
          })
          .catch(err => {
            console.log(err);
            res.sendStatus(400);
          });
      })
      .catch(err => console.log(err));
  };

exports.postLogout = (req, res, next) => {
    req.session.destroy((err) => {
        console.log(err);
        res.redirect('/');
    });
};

exports.postSignUp = (req, res, next) => {
    User.findOne({ where: { email: req.body.email } }).then((user) => {
        if(user) return res.sendStatus(400);
        return bcrypt.hash(req.body.password, 12).then((hashedPassword) => {
            User.create({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                jmbg: req.body.jmbg,
                adress: req.body.adress,
                contact: req.body.contact,
                email: req.body.email,
                password: hashedPassword
            }).then((result) => {
                console.log(result);
                res.sendStatus(201);
            });
        });
    })
    .catch((err) => {
        console.log(err);
    });
}