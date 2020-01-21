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
            name: "Data",
            releases: [
              { id: "v3.17.0-alpha.1" },
              { id: "v3.17.0-alpha.0" },
              { id: "v3.16.0-beta.0" },
              { id: "v3.15.0" },
              { id: "v3.14.1" },
              { id: "v3.16.0-alpha.3" },
              { id: "v3.8.1" },
              { id: "v3.16.0-alpha.2" },
              { id: "v3.16.0-alpha.1" },
              { id: "v3.16.0-alpha.0" }
            ]
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
        name: "Mirage JS",
        repos: [
          {
            id: "miragejs",
            name: "Mirage JS",
            releases: [
              { id: "v0.1.32" },
              { id: "v0.1.31" },
              { id: "v0.1.30" },
              { id: "v0.1.29" },
              { id: "v0.1.28" },
              { id: "v0.1.27" },
              { id: "v0.1.27-beta.3" },
              { id: "v0.1.26" }
            ]
          },
          {
            id: "site",
            name: "Site"
          }
        ]
      }
    ]
  });
}
