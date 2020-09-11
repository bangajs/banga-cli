class Conroller {

     create(args) {
          const { name, type } = args
          console.log(`CREATE: ${name.lower} conroller`)
     }

     delete(args) {
          const { name, type } = args
          console.log(`DELETE: ${name.lower} conroller`)
     }

     reset(args) {
          const { name, type } = args
          console.log(`RESET: ${name.lower} conroller`)
     }
}

module.exports = new Conroller()