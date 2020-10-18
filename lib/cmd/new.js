const chalk = require('chalk');
const ejs = require("ejs")
const fs = require("fs-extra")
const path = require("path")
const { spawn } = require('child_process');
const FM = require("./../utils/file-manager")
const TextFormatter = require("../utils/text-formatter");
const generate = require('./generate');
const ARGS = process.ARGS

const projectFiles = [
     { path: "server.js", template: "server" },
     { path: "package.json", template: "package" },
     { path: ".gitignore", template: "gitignore" },
     { path: ".env", template: "env" },
     { path: ".env.example", template: "env-eg" },

     { path: "src/config/db.config.js", template: "db-config" },
     { path: "src/config/multer.config.js", template: "multer-config" },

     { path: "src/middlewares/auth.middleware.js", template: "auth-mw" },
     { path: "src/middlewares/error.middleware.js", template: "error-mw" },
     { path: "src/middlewares/multer.middleware.js", template: "multer-mw" },
     { path: "src/middlewares/pre-route.middleware.js", template: "pre-route-mw" },

     { path: "src/routes/index.js", template: "route-index" },

     { path: "src/utils/custom-error.js", template: "custom-error" },
     { path: "src/utils/response.js", template: "response" },

     { path: "public/", template: "" },
     { path: "uploads/", template: "" },
     { path: "views/", template: "" },
]

function runCommand(command = banga, args = []) {
     const processDefaults = {
          cwd: process.cwd() + "/" + ARGS.$projectName,
          shell: true
     };

     const banga = spawn(command, args, processDefaults);

     banga.stdout.on('data', (data) => {
          console.log(`${data}`);
     });

     banga.stderr.on('data', (data) => {
          console.error(`stderr: ${data}`);
     });

     banga.on('close', (code) => {
          console.log(`child process exited with code ${code}`);
     });
}


module.exports = async () => {
     try {
          ARGS.$projectName = TextFormatter(ARGS._[1])
          let newFilebf

          for (let file of projectFiles) {
               const templatePath = path.join(__dirname, `./../templates/project/${file.template}.ejs`)
               const filePath = `${ARGS.$projectName}/${file.path}`

               if (file.template == "") {
                    newFile = await FM.create(filePath)
               }
               else {
                    const data = await ejs.renderFile(templatePath, ARGS, {})
                    newFile = await FM.create(filePath, data)

               }

               //Log to the console on successful file creation
               console.log(`${chalk.green("CREATE")}: ${chalk.underline(newFile.full)}`)
          }

          // Add user asset
          generate("asset", "user")

          // Run npm install
          runCommand("npm", ["install"])
     } catch (error) {
          console.log(error)
     }
}