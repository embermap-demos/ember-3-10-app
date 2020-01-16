import Controller from "@ember/controller";
import { inject } from "@ember/service";
import { computed } from "@ember/object";

function parents(route) {
  return route.name === "github" ? [route] : [...parents(route.parent), route];
}

export default Controller.extend({
  router: inject(),

  breadCrumbs: computed("router.currentRoute", function() {
    let activeRoutes = parents(this.router.currentRoute);

    return activeRoutes
      .filter(route => route.localName !== "index")
      .map(route => ({
        route: route.name,
        label:
          route.metadata && route.metadata.breadCrumbTitle
            ? route.metadata.breadCrumbTitle(route.attributes)
            : route.localName,
        isCurrentPage:
          route.name === this.router.currentRoute.name ||
          route.child.localName === "index"
      }));
  })
});
