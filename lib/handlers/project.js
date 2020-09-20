const FM = require("./../utils/file-manager")

const projectFiles = [
     { path: "server.js", template: "server.js" },
     { path: "package.json", template: "package.json" },
     { path: ".gitignore", template: ".gitignore" },
     { path: ".env", template: ".env" },
     { path: ".env.example", template: ".env.example" },

     { path: "src/config/db.config.js", template: "server" },
     { path: "src/config/multer.config.js", template: "multer-confiig" },

     { path: "src/middlewares/auth.middleware.js", template: "auth-mw" },
     { path: "src/middlewares/error.middleware.js", template: "error-mw" },
     { path: "src/middlewares/multer.middleware.js", template: "multer-mw" },
     { path: "src/middlewares/pre-route.middleware.js", template: "pre-route-mw" },

     { path: "src/routes/index.js", template: "route-index" },

     { path: "src/utils/custom-error.js", template: "custom-error" },
     { path: "src/utils/response.js", template: "response" },

     { path: "public/", template: "" },
     { path: "uploads/", template: "" },
     { path: "views", template: "server.js" },
]

class Project {
     async create(args) {
          const { name, type } = args
          const template = require("./../templates/project")(name)
          await FM.create(name, type, template)
     }
}

module.exports = new Project()