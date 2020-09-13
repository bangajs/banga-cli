const fse = require("fs-extra")

class FileManager {
     constructor() {
          this.cwDir = `${process.cwd()}/src`

     }

     async create(dir, name, type, data) {
          dir = `${this.cwDir}/${type}s/${name.lower}.${type}.js`
          await fse.writeFile(dir, data)

          return {
               dir
          }
     }

     read() {

     }

     update() {

     }

     delete() {

     }

}

module.exports = new FileManager()