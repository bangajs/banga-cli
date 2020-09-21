const FM = require("./../utils/file-manager")

class Model {
     async create(args) {
          const { name, type = "model" } = args
          const template = require("./../templates/model")(name)

          let path = FM.pathParser(null, name, type)
          await FM.create(path, template)
     }
}

module.exports = new Model()