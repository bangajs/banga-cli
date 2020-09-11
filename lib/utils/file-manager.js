const path = require("path")
const fse = require("fs-extra")

const FileManager = {}

FileManager.create = async (dir, name, type, data) => {
     dir = path.join(__dirname, `/src/service/${name.lower}.${type}.js`)
     console.log(dir)
     let file = await fse.open(dir, "wx")
     await fse.writeFile(file, data)
     await fse.close(file)
}

FileManager.read = () => {

}

FileManager.update = () => {

}

FileManager.delete = () => {

}

module.exports = FileManager