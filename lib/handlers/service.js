const FM = require("./../utils/file-manager")

class Service {

     async create(args) {
          const { name, type } = args

          const template = require("./../templates/service")(name)
          await FM.create("dir", name, type, template)
          console.log(`CREATE: ${name.lower} service`)
     }

     delete(args) {
          const { name, type } = args
          console.log(`DELETE: ${name.lower} service`)
     }

     reset(args) {
          const { name, type } = args
          console.log(`RESET: ${name.lower} service`)
     }
}

module.exports = new Service()