import Route from "@ember/routing/route";

export default Route.extend({
  buildRouteInfoMetadata() {
    return {
      breadcrumb(model) {
        return model.name;
      }
    };
  },

  model(params) {
    return fetch(
      `/orgs/${this.paramsFor("github.org").org}/repos/${params.repo}`
    ).then(res => res.json());
  }
});
