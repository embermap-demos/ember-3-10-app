export default function() {
  this.get("/orgs/:org", (schema, request) => {
    return schema.db.orgs.find(request.params.org);
  });

  this.get("/orgs/:org/repos/:repo", (schema, request) => {
    return schema.db.orgs
      .find(request.params.org)
      .repos.find(repo => repo.id === request.params.repo);
  });
}
