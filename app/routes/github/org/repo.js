import Route from "@ember/routing/route";

export default Route.extend({
  model(params) {
    return fetch(
      `/orgs/${this.paramsFor("github.org").org}/repos/${params.repo}`
    ).then(res => res.json());
  }
});
