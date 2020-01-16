export default function(server) {
  server.db.loadData({
    orgs: [
      {
        id: "emberjs",
        name: "Ember.js",
        repos: [
          {
            id: "ember.js",
            name: "Ember JS",
            releases: [
              { id: "v3.16.0-beta.1" },
              { id: "v3.15.0" },
              { id: "v3.15.0-beta.5" },
              { id: "v3.12.2" },
              { id: "v3.14.3" }
            ]
          },
          {
            id: "data",
            name: "Data"
          },
          {
            id: "rfcs",
            name: "RFCS"
          },
          {
            id: "ember-inspector",
            name: "Ember Inspector"
          }
        ]
      },
      {
        id: "miragejs",
        name: "Mirage JS"
      }
    ]
  });
}
