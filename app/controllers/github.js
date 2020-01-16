import Controller from "@ember/controller";
import { inject } from "@ember/service";
import { computed } from "@ember/object";

function parents(route) {
  return route.name === "github" ? [route] : [...parents(route.parent), route];
}

export default Controller.extend({
  router: inject(),

  breadcrumbs: computed("router.currentRoute", function() {
    let activeRoutes = parents(this.router.currentRoute);

    return activeRoutes
      .filter(route => route.localName !== "index")
      .map(route => ({
        label:
          route.metadata && route.metadata.breadcrumb
            ? route.metadata.breadcrumb(route.attributes)
            : route.localName,
        route: route.name,
        isCurrentPage:
          this.router.currentRoute.name === route.name ||
          route.child.localName === "index"
      }));
  })
});
