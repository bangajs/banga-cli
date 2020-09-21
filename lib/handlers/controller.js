const FM = require("./../utils/file-manager")

class Controller {
     async create(args) {
          const { name, type = "controller" } = args
          const template = require("./../templates/controller")(name)

          let path = FM.pathParser(null, name, type)
          await FM.create(path, type, template)
     }
}

module.exports = new Controller()