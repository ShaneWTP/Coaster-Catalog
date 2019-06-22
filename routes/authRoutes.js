// This is the file that handles api calls to handle authentication.
// the methods in this file know how to call the authentication strategy

module.exports = function (app, passport) {

    // Apply the passport strategy to the signup
    app.post('/signup', function (req, res, next) {
        passport.authenticate('local-signup', function (err, user, info) {
            console.log("GOT THROUGH AUTHENTICATE ");
            if (err) { return next(err); }
            if (!user) {
                // info.message is coming from the passport.authenticate
                console.log("authRout error message " + info.message);
                res.status(401);
                res.json({ error: info.message });
                res.send();
                return;
            }

            req.logIn(user, function (err) {
                if (err) { return next(err); }
                return res;
            });

            console.log('logged in', user);
            var userInfo = {
                username: user.username
            }
            res.send(userInfo);

        })(req, res, next);

    });

    // Apply the passport strategy to the signin
    app.post('/signin', function (req, res, next) {
        passport.authenticate('local-signin', function (err, user, info) {
            console.log("GOT THROUGH AUTHENTICATE ");

            if (err) { return next(err); }
            if (!user) {
                // info.message is coming from the passport.authenticate
                console.log("authRout error message " + info.message);
                res.status(401);
                res.json({ error: info.message });
                res.send();
                return;
            }
            //   createSendToken(req.user, res);

            req.logIn(user, function (err) {
                if (err) { return next(err); }
                return res;
            });

            console.log('logged in', user);
            var userInfo = {
                username: user.username
            }
            res.send(userInfo);

        })(req, res, next);
    });


    // logout the user
    app.get('/logout', (req, res) => {
        if (req.user) {
            // clears the session and clears the req.user
            req.logout();
            res.send({ msg: 'logging out' });
        } else {
            res.send({ msg: 'no user to log out' });
        }
    })

    // this gets a user from the session
    // app.get('/user', (req, res, next) => {
    //     console.log('===== user!!======');
    //     console.log(req.user);
    //     if (req.user) {
    //         res.json({ user: req.user });
    //     } else {
    //         res.json({ user: null });
    //     }
    // })
      
};