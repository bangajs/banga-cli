const fse = require("fs-extra")
const defaults = require("./../config/defaults")

let clr = defaults.color

class FileManager {
     constructor() {
          this.cwDir = `${process.cwd()}/src`

     }

     async create(dir = null, name, type, data) {
          const dir = dir || `${this.cwDir}/${type}s/`
          const filename = `${name.lower}.${type}.js`
          const path = dir + filename

          await fse.mkdirp(dir)
          await fse.writeFile(path, data)

          log(`${clr.green}CREATE${clr.reset}: ${clr.bright}${name.lower} ${type}${clr.reset} -> ${clr.underscore}${path}${clr.reset}`)

          return { path }
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