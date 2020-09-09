class Conroller{

     create(name, option){
          console.log(`CREATE: ${name.lower} conroller`)
     }

     delete(name, option){
          console.log(`DELETE: ${name.lower} conroller`)
     }

     reset(name, option){
          console.log(`RESET: ${name.lower} conroller`)
     }
}

module.exports = new Conroller()