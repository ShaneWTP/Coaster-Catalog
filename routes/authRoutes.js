// This is the file that handles api calls from the signin and signup webpages.
// the methods in this file know how to call the authentication strategy

var authController = require("../controllers/authcontroller");

module.exports = function (app, passport) {

    app.get("/signup", authController.signup);
    app.get("/signin", authController.signin);
    // only want this page to be available if user is logged in
    app.get("/dashboard", isLoggedIn, authController.dashboard);
    app.get("/logout", authController.logout);

    // Apply the passport strategy to the signup
    app.post("/signup", passport.authenticate("local-signup", {
            successRedirect: "/dashboard",
            failureRedirect: "/signup",
            failureFlash: true
        }
    ));

    app.post('/signin', passport.authenticate("local-signin", {
            successRedirect: "/dashboard",
            failureRedirect: "/signin",
            failureFlash: true
        }
    ));

    // If user tries to see the dashboard while not logged in, they
    // will be redirected to the signup page
    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated())
            return next();
        res.redirect("/signin");
    }
};