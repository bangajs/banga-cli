const ARGS = process.ARGS
const alias = require("./../config/defaults").commandAlias
const help = {}

help.default =
`
Generate production ready Nodejs application

Usage: 

  $ banga <command> [<args>] [<options>] [--help] [--version]


Commands:

  docs\t\t\tOpen the BangaJS documentation website
  generate\t\tGenerate and/or modify files
  help\t\t\ttLists available commands and options.
  new\t\t\tCreates a new workspace and an initial Banga app.
  version\t\tShow the BangaJS version information


Options:

  -h, --help\t\tLists available commands and options.
  -v, --version\t\tShow the BangaJS version information
  -f, --force\t\tWhen true, forces overwriting of existing files.


Run 'banga <command> --help' for more information on a command.
`


help.generate =
`
Generate and/or modify files

Usage: 

  $ banga generate <type> <name> [<options>]


type:

  a, asset\t\tOpen the BangaJS documentation website
  c, controller\t\tOpen the BangaJS documentation website
  m, model\t\tGenerate and/or modify files
  r, route\t\tLists available commands and options.
  s, service\t\tCreates a new workspace and an initial Banga app.
`


help.new =
`

Creates a new workspace and an initial Banga app.

Usage: 

  $ banga new <name> [<options>]
`


module.exports = () => {
     const cmd = alias[ARGS.$cmd]
     console.log(help[cmd] || help.default)

}