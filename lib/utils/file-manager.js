const fse = require("fs-extra")
const defaults = require("./../config/defaults")

let clr = defaults.color

class FileManager {
     async create(path, data) {
          // const dir = `${process.cwd()}/src/${type}s/`
          // const filename = `${name.lower}.${type}.js`
          // const path = dir + filename

          // Make directory before writing to file
          await fse.mkdirp(path.dir)
          await fse.writeFile(path.full, data)

          //Log to the console on successful file creation
          const command = `${clr.green}CREATE${clr.reset}`
          const name_type = `${clr.bright}${path.name.lower} ${path.type}${clr.reset}`
          const file = `${clr.underscore}${path.full}${clr.reset}`
          log(`${command}: ${name_type} -> ${file}`)

          return { path }
     }

     read() { }

     update() { }

     delete() { }

     /**
      * This method generate path objects for more dynamic use
      * @param {string} path Path to file. If the file is not among the "Types" leave it as null so the path can be auto generated
      * @param {string} name Name object gotten from the text-formatter utils
      * @param {string} type type of file e.g service, controller, model, etc'
      * 
      * @returns {string} dir - file directory excluding the file name
      * @returns {string} filename - just the file name
      * @returns {string} full - full path. combination of dir and filename
      * 
      */

     assetPathFormatter(path, name, type) {
          let dir
          let file

          if (!path) {
               dir = `${process.cwd()}/src/${type}s/`
               file = `${name.lower}.${type}.js`
          } else {
               dir = `${process.cwd()}/${path}`
               let len = dir.split("/")

               file = len.splice((len.length - 1), 1)

               file = file.join("")
               name = file.split(".")[0]
               dir = len.join("/") + "/"
          }

          return {
               dir,
               file,
               name,
               type,
               full: dir + file
          }
     }

}

module.exports = new FileManager()