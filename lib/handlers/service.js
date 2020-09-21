const FM = require("./../utils/file-manager")

class Service {
     async create(args) {
          const { name, type = "service" } = args
          const template = require("./../templates/service")(name)

          let path = FM.pathParser(null, name, type)
          await FM.create(path, template)
     }
}

module.exports = new Service()