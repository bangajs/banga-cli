const help = {}

help.default =
     `
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
     `


help.generate =
     `
     Generate and/or modify files

     Usage: 
     
     $ banga generate <type> <name> [<options>]
     `


help.new =
     `
     Creates a new workspace and an initial Banga app.

     Usage: 
     
     $ banga new <name> [<options>]
     `