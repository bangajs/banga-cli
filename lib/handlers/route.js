const FM = require("./../utils/file-manager")
class Route {
     async create(args) {
          const { name, type = "route" } = args
          const template = require("./../templates/route")(name)

          let path = FM.pathParser(null, name, type)
          await FM.create(path, template)
     }
}

module.exports = new Route()