import Route from "@ember/routing/route";

export default Route.extend({
  buildRouteInfoMetadata() {
    return {
      breadcrumb(model) {
        return `${model.name} (${model.repos.length} repos)`;
      }
    };
  },

  model(params) {
    return fetch(`/orgs/${params.org}`).then(res => res.json());
  }
});
