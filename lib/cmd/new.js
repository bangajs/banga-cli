const chalk = require('chalk');
const ejs = require("ejs")
const path = require("path")
const spawn = require('child_process').spawnSync

const app = require('./../utils/app');
const FM = require("./../utils/file-manager")
const TextFormatter = require("../utils/text-formatter");
const ARGS = process.ARGS

const projectFiles = [
     { path: ".env.dev", template: ".env-dev", options: [] },
     { path: ".env", template: ".env", options: [] },
     { path: ".gitignore", template: ".gitignore", options: [] },
     { path: "package.json", template: ".package", options: [] },
     { path: "server.js", template: ".server", options: [] },

     { path: "src/config/env/dev.env.json", template: "config-env-dev", options: [] },
     { path: "src/config/env/prod.env.json", template: "config-env-prod", options: [] },
     { path: "src/config/mongo-db.config.js", template: "config-mongodb", options: [] },
     { path: "src/config/index.js", template: "config-index", options: [] },

     { path: "src/middlewares/auth.middleware.js", template: "mw-auth", options: ["auth"] },
     { path: "src/middlewares/error.middleware.js", template: "mw-error", options: [] },
     { path: "src/middlewares/multer.middleware.js", template: "mw-multer", options: [] },
     { path: "src/middlewares/pre-route.middleware.js", template: "mw-pre-route", options: [] },

     { path: "src/controllers/auth.controller.js", template: "src-controller-auth", options: ["auth"] },
     { path: "src/controllers/user.controller.js", template: "src-controller-user", options: ["auth"] },

     { path: "src/models/token.model.js", template: "src-model-token", options: ["auth"] },
     { path: "src/models/user.model.js", template: "src-model-user", options: ["auth"] },

     { path: "src/routes/index.js", template: "src-route-index", options: [] },
     { path: "src/routes/auth.route.js", template: "src-route-auth", options: ["auth"] },
     { path: "src/routes/user.route.js", template: "src-route-user", options: ["auth"] },

     { path: "src/services/auth.service.js", template: "src-service-auth", options: ["auth"] },
     { path: "src/services/mail.service.js", template: "src-service-mail", options: [] },
     { path: "src/services/user.service.js", template: "src-service-user", options: ["auth"] },

     { path: "src/utils/custom-error.js", template: "uti-custom-error", options: [] },
     { path: "src/utils/multer.js", template: "uti-multer", options: [] },
     { path: "src/utils/response.js", template: "uti-response", options: [] },

     { path: "src/validators/", template: null, options: [] },

     { path: "public/", template: null, options: [] },
     { path: "uploads/", template: null, options: [] },
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
               if (app.canRender(file.options)) {
                    const filePath = `${ARGS.$projectName}/${file.path}`
                    const templatePath = path.join(__dirname, `./../templates/project/${file.template}.ejs`)

                    const data = file.template ? await ejs.renderFile(templatePath, { canRender: app.canRender, ...ARGS }, {}) : null
                    newFile = await FM.create(filePath, data)

                    if (newFile.status == "exists")
                         console.log(`${chalk.yellow("EXISTS")}: ${newFile.full}`)
                    else
                         console.log(`${chalk.green("CREATE")}: ${newFile.full}`)
               }
          }
          console.log(chalk.cyan("Created project files ✅"))

          if(ARGS.dep){
               // Run npm install
               console.log(chalk.bold("\nInstalling packages..."))
               runCommand("npm", ["install"])
               console.log(chalk.cyan("Packages installed ✅"))
          }

          if(ARGS.git){
               // Initialize Git
               console.log(chalk.bold("\nInitialising git..."))
               runCommand("git", ["init"])
               console.log(chalk.cyan("Git initialised ✅"))
          }

          // All set 
          console.log(chalk.cyan("\n\nYou're good to go! ✅\n"))

     } catch (error) {
          console.log(chalk.red(error.message))
          help()
     }
}