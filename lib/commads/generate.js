const FM = require("./../utils/file-manager")



module.exports = (args) => {
     const { name, type } = args
     const template = require(`./../templates/${type}`)(name)

     let path = FM.pathParser(null, name, type)
     await FM.create(path, template)
}


// check if type exits
// run for asset and others