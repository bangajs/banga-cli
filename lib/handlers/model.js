class Model {

     create(args) {
          const { name, type } = args
          console.log(`CREATE: ${name.lower} model`)
     }

     delete(args) {
          const { name, type } = args
          console.log(`DELETE: ${name.lower} model`)
     }

     reset(args) {
          const { name, type } = args
          console.log(`RESET: ${name.lower} model`)
     }
}

module.exports = new Model()