var express      = require("express"),
    router       = express.Router(),
    passport     = require("passport"),
    User         = require("../models/user"),
    middleware       = require("../middleware");

//ROOT Route
router.get("/", function(req,res){
  res.render("landing");
});
//ROUTES


//====================================
//AUTH ROUTES
//====================================

//register form
router.get("/register", function(req, res) {
    res.render("register", {page: 'register'});
});
//sign up logic
router.post("/register", function(req, res) {
    var newUser = new User({username: req.body.username});
    User.register(newUser, req.body.password, function(err, user){
        if(err){
            req.flash("error", err.message);
            return res.redirect("/register");
        }
        passport.authenticate("local")(req, res, function(){
            req.flash("success","Welcome to YelpCamp " + user.username);
            res.redirect("/campgrounds");
        });
    });
});

//login form
router.get("/login", function(req, res) {
    res.render("login", {page: 'login'});
});
//login logic
router.post("/login", passport.authenticate("local",
//middleware
{
    successRedirect: "/campgrounds",
    failuerRedirect: "/login"
}),function(req, res) {});

//logout
router.get("/logout", function(req, res) {
   req.logout(); 
   req.flash("success", "Logged you out!");
   res.redirect("/campgrounds");
});


module.exports = router;