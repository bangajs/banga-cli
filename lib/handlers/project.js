class Project {

     create(args) {
          const { name, type } = args
          console.log(`CREATE: ${name.lower} project`)
     }

     delete(args) {
          const { name, type } = args
          console.log(`DELETE: ${name.lower} project`)
     }

     reset(args) {
          const { name, type } = args
          console.log(`RESET: ${name.lower} project`)
     }
}

module.exports = new Project()