const fse = require("fs-extra")
const defaults = require("./../config/defaults")

let clr = defaults.color

class FileManager {
     constructor() {
          this.cwDir = `${process.cwd()}/src`

     }

     async create(dir, name, type, data) {
          dir = `${this.cwDir}/${type}s/${name.lower}.${type}.js`
          await fse.writeFile(dir, data)
          log(`${clr.green}CREATE${clr.reset}: ${clr.bright}${name.lower} ${type}${clr.reset} -> ${clr.underscore}${dir}${clr.reset}`)
          
          return {
               dir
          }
     }

     read() {
          
     }
     
     update() {
          
          log(`${clr.green}UPDATE${clr.reset}: ${clr.bright}${name.lower} ${type}${clr.reset} -> ${clr.underscore}${dir}${clr.reset}`)
     }

     delete() {

     }

}

module.exports = new FileManager()