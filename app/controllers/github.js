import Controller from "@ember/controller";
import { inject } from "@ember/service";
import { computed } from "@ember/object";

function children(route) {
  return route.child ? [route, ...children(route.child)] : [route];
}

export default Controller.extend({
  router: inject(),

  activeRoutes: computed("router.currentRoute", function() {
    let rootRoute = this.router.currentRoute.find(
      route => route.name === "github"
    );

    return children(rootRoute);
  })
});
