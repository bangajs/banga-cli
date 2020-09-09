class Service{

     create(name, option){
          console.log(`CREATE: ${name.lower} service`)
     }

     delete(name, option){
          console.log(`DELETE: ${name.lower} service`)
     }

     reset(name, option){
          console.log(`RESET: ${name.lower} service`)
     }
}

module.exports = new Service()