class Asset{

     create(name, option){
          console.log(`CREATE: ${name.lower} asset`)
     }

     delete(name, option){
          console.log(`DELETE: ${name.lower} asset`)
     }

     reset(name, option){
          console.log(`RESET: ${name.lower} asset`)
     }
}

module.exports = new Asset()