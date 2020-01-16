import Route from "@ember/routing/route";

export default Route.extend({
  buildRouteInfoMetadata() {
    return {
      breadCrumbTitle() {
        return "About";
      }
    };
  }
});
