class Route{

     create(name, option){
          console.log(`CREATE: ${name.lower} route`)
     }

     delete(name, option){
          console.log(`DELETE: ${name.lower} route`)
     }

     reset(name, option){
          console.log(`RESET: ${name.lower} route`)
     }
}

module.exports = new Route()