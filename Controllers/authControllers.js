const User = require('../models/user');


exports.loginPage =  (req, res) => {
    if (req.session && req.session.userId) {
      res.redirect('/url');
  } else {
      res.render('login');
  }
  }



  exports.signupPage =  (req, res) => {
    // Check if the user is already authenticated
    if (req.session && req.session.userId) {
        res.redirect('/url');
    } else {
        res.render('signup');
    }
  }

exports.login = async (req, res) => {
    const { username, password } = req.body;

    const user = await User.findOne({ username, password });
    if (user) {
        req.session.userId = user._id;
        res.redirect('/url');
    } else {
        res.render('login', { error: 'Invalid username or password' });
    }
};

exports.signup = async (req, res) => {
    const { username, password, email } = req.body;

    try {
        const user = await User.create({ username, password, email });
        res.redirect('/');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error creating user');
    }
};

exports.logout = (req, res) => {
    req.session.destroy(() => {
        res.redirect('/');
    });
};