const FM = require("./../utils/file-manager")

class Service {
     async create(args) {
          const { name, type } = args
          const template = require("./../templates/service")(name)
          await FM.create(name, type, template)
     }
}

module.exports = new Service()