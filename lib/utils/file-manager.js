const fse = require("fs-extra")

const FileManager = {}

FileManager.create = async (dir) => {
     await fse.mkdirp(dir)
}

FileManager.read = () => {

}

FileManager.update = () => {

}

FileManager.delete = () => {

}

module.exports = FileManager