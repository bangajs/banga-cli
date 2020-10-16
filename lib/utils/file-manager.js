const fse = require("fs-extra")
const defaults = require("./../config/defaults")

let clr = defaults.color

class FileManager {
     async create(path, data) {
          // Make directory before writing to file
          await fse.mkdirp(path.dir)
          await fse.writeFile(path.full, data)

          //Log to the console on successful file creation
          const command = `${clr.green}CREATE${clr.reset}`
          const name_type = `${clr.bright}${path.name} ${path.type}${clr.reset}`
          const file = `${clr.underscore}${path.full}${clr.reset}`
          console.log(`${command}: ${name_type} -> ${file}`)

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
      * @returns {object} 
      * 
      * dir - file directory excluding the file name
      * 
      *  file - just the file name and extention
      * 
      *  full - full path from working directory. combination of dir and filename
      * 
      *  fullCwd - full path from root directory.
      * 
      *  name - Name of the file with no extention or type prefix
      * 
      *  type - type of file
      * 
      */

     pathParser(path, name, type) {
          let dir
          let file
          let cwd = process.cwd() + "/"

          if (!path) {
               dir = `src/${type}s/`
               file = `${name}.${type}.js`
          } else {
               dir = `${path}`
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
               fullCwd: cwd + dir + file,
               full: dir + file,
          }
     }

}

module.exports = new FileManager()