const FM = require("./../utils/file-manager")

class Route {
     async create(args) {
          const { name, type } = args
          const template = require("./../templates/route")(name)
          await FM.create(name, type, template)
     }
}

module.exports = new Route()