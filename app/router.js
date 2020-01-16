import EmberRouter from "@ember/routing/router";
import config from "./config/environment";

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route("1-angle-brackets-for-nested");
  this.route("2-angle-brackets-for-builtins");

  this.route("static-route");
  this.route("dynamic-route", { path: "/:slug" }, function() {
    this.route("dynamic-child", { path: "/:child_slug" });
  });

  this.route("github", function() {
    this.route("about");
    this.route("org", { path: ":org" }, function() {
      this.route("repo", { path: ":repo" }, function() {
        this.route("releases", function() {
          this.route("release", { path: ":release" });
        });
      });
    });
  });
});

// https://api.github.com/repos/emberjs/ember.js/releases

export default Router;
