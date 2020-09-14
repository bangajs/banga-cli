const FM = require("./../utils/file-manager")

class Project {
     async create(args) {
          const { name, type } = args
          const template = require("./../templates/project")(name)
          await FM.create(name, type, template)
     }
}

module.exports = new Project()