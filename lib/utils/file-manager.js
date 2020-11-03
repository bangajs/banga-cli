const fse = require("fs-extra")
const ARGS = process.ARGS


class FileManager {
     async create(path, data) {
          const filePath = this.pathParser(path)

          // check if path exists and prevent overwrite if force is false 
          if (fse.pathExistsSync(filePath.fullCWD) && !ARGS.force) {
               return {status:"exists", ...filePath}
          }
          
          // Make directory before writing to file
          await fse.mkdirp(filePath.dir)
          if (data) await fse.writeFile(filePath.fullCWD, data)

          return {status:"created", ...filePath}
     }


     /**
      * This method generate path objects for more dynamic use
      * @param {string} path Path to file. If null the file dir will be auto genrated based on it's type
      * 
      * @returns {object}
      * 
      * dir - file directory excluding the file name
      * 
      * file - just the file name and extention
      * 
      * full - full path from working directory. combination of dir and filename
      * 
      * fullCWD - full path from root directory. combination of cwd(), dir and filename
      */

     pathParser(path) {
          const { $type, $name, $path, root } = ARGS

          let dir
          let file

          if (!path) {
               let rootDir = !root ? `src/${$type}s/` : ""
               dir = rootDir + $path
               file = `${$name}.${$type}.js`
          } else {
               dir = `${path}`.split("/")

               file = dir.splice((dir.length - 1), 1).join()
               dir = dir.join("/")
          }

          return {
               dir,
               file,
               full: `${dir}/${file}`,
               fullCWD: `${process.cwd()}/${dir}/${file}`
          }
     }

}

module.exports = new FileManager()