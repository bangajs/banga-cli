const FM = require("./../utils/file-manager")

class Model {
     async create(args) {
          const { name, type } = args
          const template = require("./../templates/model")(name)
          await FM.create(name, type, template)
     }
}

module.exports = new Model()