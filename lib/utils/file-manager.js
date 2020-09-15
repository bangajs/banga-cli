const fse = require("fs-extra")
const defaults = require("./../config/defaults")

let clr = defaults.color

class FileManager {
     constructor() {
          this.cwDir = `${process.cwd()}/src`
     }

     async create(name, type, data) {
          const dir = `${this.cwDir}/${type}s/`
          const filename = `${name.lower}.${type}.js`
          const path = dir + filename

          await fse.mkdirp(dir)
          await fse.writeFile(path, data)

          const command = `${clr.green}CREATE${clr.reset}`
          const name_type = `${clr.bright}${name.lower} ${type}${clr.reset}`
          const file = `${clr.underscore}${path}${clr.reset}`
          log(`${command}: ${name_type} -> ${file}`)

          return { path }
     }

     read() { }

     update() { }

     delete() { }

}

module.exports = new FileManager()