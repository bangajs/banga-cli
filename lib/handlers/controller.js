const FM = require("./../utils/file-manager")

class Controller {
     async create(args) {
          const { name, type } = args
          const template = require("./../templates/controller")(name)
          await FM.create(name, type, template)
     }
}

module.exports = new Controller()