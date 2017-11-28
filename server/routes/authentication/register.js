var User = require('./models/user.js');
const passwordHash = require('password-hash');

module.exports = (req, res) => {

  if (req.body.name && req.body.password && req.body.email) {
    console.log("DEBUG: Correct number of params");
    // checking to see if user exists with that email
    User.count({'email': req.body.email},
               function (err, count) {

      if (count <= 0) {
          var hashedPassword = passwordHash.generate(req.body.password);
          
          var user = new User({
            name: req.body.name,
            password: hashedPassword,
            email: req.body.email,
            dateJoined: Date.now(),
          });

          // we create the user if they don't exist
          user.save(function (err) {
            if (err) {
              console.log(err);
              res.status(400).json({ success: false });
            }
          });

      } else {
        console.log('User already registered.')
        res.status(400).json({ success: false });
      }
    });
  } else {
    // email is already registered
    console.log('Bad params.');
    res.status(400).json({ success: false });
  }
}
