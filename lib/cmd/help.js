const help = {}

help.default =
  `
Build ExpressJS applications with speed and efficiency with BàngáJS


Usage: 

  $ banga <command> [<args>] [<options>] [--help]


Commands:

  docs\t\t\tOpens Banga docmentation in a browser
  generate\t\tGenerates and/or modifies files.
  help\t\t\tLists available commands and their descriptions.
  new\t\t\tCreates a new Express app.
  version\t\tDisplays Banga version.


Run 'banga <command> --help' for more information on a command.
`


help.generate =
  `
Generate and/or modify files


Usage: 

  $ banga generate <type> <name> [<options>]


Types:

  a, asset\t\tCreate controller, model, route and service files.
  c, controller\t\tCreate controller file
  m, model\t\tCreate model file
  r, route\t\tCreate route file
  s, service\t\tCreate service file


Options:
  --auth\t\tAdd auth middleware to routes
  --no-controller\tDo not create controller file
  --no-create\t\tDo not include create methods
  --no-crud\t\tDo not include CRUD methods
  --no-delete\t\tDo not include delete methods
  --force\t\tReplace file if it already exists
  --no-model\t\tDo not create model file
  --no-read\t\tDo not include read methods
  --root\t\tCreates file at the root of the current working directory
  --no-route\t\tDo not create route file
  --no-service\t\tDo not create service file
  --no-update\t\tDo not include update methods

`


help.new =
  `
Creates a new Express app.

Usage: 

  $ banga new <app-name> [<options>]


Options:
  --force\t\tReplace file if it already exists
  --no-auth\t\tDo not include User and authentication files
  --no-dep\t\tDo not install packges
  --no-git\t\tDo not initialize git
  --session\t\tAdd express session middleware
`


module.exports = () => {
  const cmd = process.ARGS && process.ARGS.$cmd
  console.log(help[cmd] || help.default)
}