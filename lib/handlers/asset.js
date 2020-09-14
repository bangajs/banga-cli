const FM = require("./../utils/file-manager")

class Asset {
     async create(args) {
          const { name, type } = args
          const template = require("./../templates/asset")(name)
          await FM.create(name, type, template)
     }
}

module.exports = new Asset()