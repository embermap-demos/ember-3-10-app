import Route from "@ember/routing/route";

export default Route.extend({
  buildRouteInfoMetadata() {
    return {
      breadCrumbTitle(model) {
        return model.name;
      }
    };
  },

  model(params) {
    return fetch(`/orgs/${params.org}`).then(res => res.json());
  }
});
