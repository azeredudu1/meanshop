var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;

exports.setup = function(User, config) {
  passport.use(new FacebookStrategy({
    clientID: '1044810015574579',
    clientSecret: '5a38d8f5ac8a9dc3a152bc42847f2c52',
    callbackURL: 'http://localhost:9000/auth/facebook/callback',
    
  },
  function(accessToken, refreshToken, profile, done) {
    User.findOneAsync({
      'facebook.id': profile.id
    })
      .then(function(user) {
        if (!user) {
          user = new User({
            name: profile.displayName,
            email: profile.emails[0].value,
            role: 'user',
            provider: 'facebook',
            facebook: profile._json
          });
          user.saveAsync()
            .then(function(user) {
              return done(null, user);
            })
            .catch(function(err) {
              return done(err);
            });
        } else {
          return done(null, user);
        }
      })
      .catch(function(err) {
        return done(err);
      });
  }));
};
