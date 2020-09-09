class Model{

     create(name, option){
          console.log(`CREATE: ${name.lower} model`)
     }

     delete(name, option){
          console.log(`DELETE: ${name.lower} model`)
     }

     reset(name, option){
          console.log(`RESET: ${name.lower} model`)
     }
}

module.exports = new Model()