class Route {

     create(args) {
          const { name, type } = args
          console.log(`CREATE: ${name.lower} route`)
     }

     delete(args) {
          const { name, type } = args
          console.log(`DELETE: ${name.lower} route`)
     }

     reset(args) {
          const { name, type } = args
          console.log(`RESET: ${name.lower} route`)
     }
}

module.exports = new Route()