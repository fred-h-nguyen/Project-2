var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    var logged = req.user;
    console.log(req.user);
    res.render("index", {
      logged: logged
    });
  });

  //Load signup page
  app.get("/signup", function(req, res) {
    res.render("signup", {
      logged: false
    });
  });

  // Load example page and pass in an example by id
  app.get("/roster", function(req, res) {
    db.Example.findAll({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
