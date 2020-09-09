class Project{

     create(name, option){
          console.log(`CREATE: ${name.lower} project`)
     }

     delete(name, option){
          console.log(`DELETE: ${name.lower} project`)
     }

     reset(name, option){
          console.log(`RESET: ${name.lower} project`)
     }
}

module.exports = new Project()