import Route from "@ember/routing/route";

export default Route.extend({
  model(params) {
    return fetch(`/orgs/${params.org}`).then(res => res.json());
  }
});
