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
});

export default Router;
