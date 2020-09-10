const FM = require("./../utils/file-manager")

class Service {

     async create(name, option) {
          const template = require("./../templates/service")(name)
          await FM.create("dir", name, template)
          console.log(`CREATE: ${name.lower} service`)
     }

     delete(name, option) {
          console.log(`DELETE: ${name.lower} service`)
     }

     reset(name, option) {
          console.log(`RESET: ${name.lower} service`)
     }
}

module.exports = new Service()