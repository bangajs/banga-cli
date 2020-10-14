const opn = require('opn');

const FM = require("./../utils/file-manager")
const package = require("./../../package.json")
const config = require("./../config/defaults")
const _exit = process.exit


const commands = {}


//===============================================================//
//   Help
//===============================================================//

commands.help = () => {
     console.log(`
     Generate production ready Nodejs application

     Usage: 
     
     $ banga <command> [<args>] [<options>] [--help] [--version]


     Commands:
     
     docs\t\tOpen the BangaJS documentation website
     generate\t\tGenerate and/or modify files
     help\t\tLists available commands and options.
     new\t\tCreates a new workspace and an initial Banga app.
     version\t\tShow the BangaJS version information


     Options:
     
     -h, --help\t\tLists available commands and options.
     -v, --version\tShow the BangaJS version information
     -f, --force\tWhen true, forces overwriting of existing files.
     

     Run 'banga <command> --help' for more information on a command.
     `)
}


//===============================================================//
//   Version
//===============================================================//

commands.version = () => {
     console.log(`BangaJS v${package.version}`)
}


//===============================================================//
//   Docs
//===============================================================//

commands.docs = () => {
     // opens the url in the default browser 
     opn(`${config.docs}`);
}


//===============================================================//
//   Generate
//===============================================================//

commands.generate = async (args) => {
     const { name, type } = args
     const template = require(`./../templates/${type}`)(name)

     let path = FM.pathParser(null, name, type)
     await FM.create(path, template)
}


//===============================================================//
//   New
//===============================================================//

commands.new = () => {

}


commands.help()