import Ember from "ember";
import config from "./config/environment";

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route("app", function() {
    this.resource("projects", function() {
      this.route("new");
    });

    this.resource("project", {
      path: "project/:project_id"
    }, function() {
      this.route("edit");

      this.resource("ideas", function() {
        this.route("new");
      });

      this.resource("idea", {
        path: "idea/:idea_id"
      }, function() {
        this.route("edit");
      });
    });
  });

  this.route("public", {
    path: "/"
  }, function() {
    this.route("how-it-works");
    this.route("reset-password");
  });

  this.route("session", function() {
    this.route("login");
    this.route("register");
  });

  this.route("ideas");

  this.route("idea", function() {
    this.route("edit");
  });
});

export default Router;