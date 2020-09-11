class Asset {

     create(args) {
          const { name, type } = args
          console.log(`CREATE: ${name.lower} asset`)
     }

     delete(args) {
          const { name, type } = args
          console.log(`DELETE: ${name.lower} asset`)
     }

     reset(args) {
          const { name, type } = args
          console.log(`RESET: ${name.lower} asset`)
     }
}

module.exports = new Asset()