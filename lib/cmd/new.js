const chalk = require('chalk');
const ejs = require("ejs")
const path = require("path")
const spawn = require('child_process').spawnSync

const app = require('./../utils/app');
const FM = require("./../utils/file-manager")
const TextFormatter = require("../utils/text-formatter");
const ARGS = process.ARGS

const projectFiles = [
     { path: ".env.dev", template: ".env-dev", pemm: [] },
     { path: ".env", template: ".env", pemm: [] },
     { path: ".gitignore", template: ".gitignore", pemm: [] },
     { path: "package.json", template: ".package", pemm: [] },
     { path: "server.js", template: ".server", pemm: [] },

     { path: "src/config/config.json", template: "config", pemm: [] },
     { path: "src/config/config.dev.json", template: "config-dev", pemm: [] },
     { path: "src/config/index.js", template: "config-index", pemm: [] },

     { path: "src/middlewares/auth.middleware.js", template: "mw-auth", pemm: ["auth"] },
     { path: "src/middlewares/error.middleware.js", template: "mw-error", pemm: [] },
     { path: "src/middlewares/multer.middleware.js", template: "mw-multer", pemm: [] },
     { path: "src/middlewares/pre-route.middleware.js", template: "mw-pre-route", pemm: [] },

     { path: "src/controllers/auth.controller.js", template: "src-controller-auth", pemm: ["auth"] },
     { path: "src/controllers/user.controller.js", template: "src-controller-user", pemm: ["auth"] },

     { path: "src/models/token.model.js", template: "src-model-token", pemm: ["auth"] },
     { path: "src/models/user.model.js", template: "src-model-user", pemm: ["auth"] },

     { path: "src/routes/index.js", template: "src-route-index", pemm: [] },
     { path: "src/routes/auth.route.js", template: "src-route-auth", pemm: ["auth"] },
     { path: "src/routes/user.route.js", template: "src-route-user", pemm: ["auth"] },

     { path: "src/services/auth.service.js", template: "src-service-auth", pemm: ["auth"] },
     { path: "src/services/mail.service.js", template: "src-service-mail", pemm: [] },
     { path: "src/services/user.service.js", template: "src-service-user", pemm: ["auth"] },

     { path: "src/utils/custom-error.js", template: "uti-custom-error", pemm: [] },
     { path: "src/utils/multer.js", template: "uti-multer", pemm: [] },
     { path: "src/utils/response.js", template: "uti-response", pemm: [] },

     { path: "public/", template: "", pemm: [] },
     { path: "uploads/", template: "", pemm: [] },
     { path: "views/", template: "", pemm: [] },
]

function runCommand(command = "banga", args = []) {
     const processDefaults = {
          cwd: process.cwd() + "/" + ARGS.$projectName,
          shell: true,
          stdio: 'inherit'
     };

     const ls = spawn(command, args, processDefaults)

     if (ls.error) {
          throw ls.error
     }
}


module.exports = async () => {
     try {
          const parseName = app.parseName(ARGS._[1])
          if (!parseName) throw new Error(`banga: '${ARGS._[2]}' is an invalid name`)
          ARGS.$projectName = TextFormatter(parseName.name)
          ARGS.root = true

          let newFile

          // Create project files
          console.log(chalk.bold("\nCreating Project files..."))
          for (let file of projectFiles) {
               if (app.canRender(file.pemm)) {
                    const filePath = `${ARGS.$projectName}/${file.path}`
                    const templatePath = path.join(__dirname, `./../templates/project/${file.template}.ejs`)

                    if (file.template == "") {
                         newFile = await FM.create(filePath)
                    }
                    else {
                         const data = await ejs.renderFile(templatePath, { canRender: app.canRender, ...ARGS }, {})
                         newFile = await FM.create(filePath, data)
                    }

                    //Log to the console on successful file creation
                    console.log(`${chalk.green("CREATE")}: ${newFile.full}`)
               }
          }
          console.log(chalk.cyan("Created project files ✅"))

          // Run npm install
          console.log(chalk.bold("\nInstalling packages..."))
          runCommand("npm", ["install"])
          console.log(chalk.cyan("Packages installed ✅"))

          // Initialize Git
          console.log(chalk.bold("\nInitialising git..."))
          runCommand("git", ["init"])
          console.log(chalk.cyan("Git initialised ✅"))

          // All set 
          console.log(chalk.cyan("\n\nYou're good to go! ✅\n"))

     } catch (error) {
          console.log(chalk.red(error.message))
          help()
     }
}