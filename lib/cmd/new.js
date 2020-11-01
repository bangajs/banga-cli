const chalk = require('chalk');
const ejs = require("ejs")
const path = require("path")
const spawn = require('child_process').spawnSync
const FM = require("./../utils/file-manager")
const TextFormatter = require("../utils/text-formatter");
const ARGS = process.ARGS

const projectFiles = [
     { path: ".env.dev", template: ".env-dev" },
     { path: ".env", template: ".env" },
     { path: ".gitignore", template: ".gitignore" },
     { path: "package.json", template: ".package" },
     { path: "server.js", template: ".server" },

     { path: "src/config/config.json", template: "config" },
     { path: "src/config/config.dev.json", template: "config-dev" },
     { path: "src/config/index.js", template: "config-index" },

     { path: "src/middlewares/auth.middleware.js", template: "mw-auth" },
     { path: "src/middlewares/error.middleware.js", template: "mw-error" },
     { path: "src/middlewares/multer.middleware.js", template: "mw-multer" },
     { path: "src/middlewares/pre-route.middleware.js", template: "mw-pre-route" },

     { path: "src/controllers/auth.controller.js", template: "src-controller-auth" },
     { path: "src/controllers/user.controller.js", template: "src-controller-user" },

     { path: "src/models/token.model.js", template: "src-model-token" },
     { path: "src/models/user.model.js", template: "src-model-user" },

     { path: "src/routes/index.js", template: "src-route-index" },
     { path: "src/routes/auth.route.js", template: "src-route-auth" },
     { path: "src/routes/user.route.js", template: "src-route-user" },

     { path: "src/services/auth.service.js", template: "src-service-auth" },
     { path: "src/services/mail.service.js", template: "src-service-mail" },
     { path: "src/services/user.service.js", template: "src-service-user" },

     { path: "src/utils/custom-error.js", template: "uti-custom-error" },
     { path: "src/utils/multer.js", template: "uti-multer" },
     { path: "src/utils/response.js", template: "uti-response" },

     { path: "public/", template: "" },
     { path: "uploads/", template: "" },
     { path: "views/", template: "" },
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
          ARGS.$projectName = TextFormatter(ARGS._[1])
          ARGS.root = true
          
          let newFile

          // Create project files
          console.log(chalk.bold("\nCreating Project files..."))
          for (let file of projectFiles) {
               const filePath = `${ARGS.$projectName}/${file.path}`
               const templatePath = path.join(__dirname, `./../templates/project/${file.template}.ejs`)

               if (file.template == "") {
                    newFile = await FM.create(filePath)
               }
               else {
                    const data = await ejs.renderFile(templatePath, ARGS, {})
                    newFile = await FM.create(filePath, data)
               }

               //Log to the console on successful file creation
               console.log(`${chalk.green("CREATE")}: ${newFile.full}`)
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
          console.log(error)
     }
}