const chalk = require('chalk');
const ejs = require("ejs")
const path = require("path")
const { spawn } = require('child_process');
const FM = require("./../utils/file-manager")
const TextFormatter = require("../utils/text-formatter");
const generate = require('./generate');
const ARGS = process.ARGS

const projectFiles = [
     { path: ".env.dev", template: ".env-dev" },
     { path: ".env", template: ".env" },
     { path: ".gitignore", template: ".gitignore" },
     { path: "package.json", template: ".package" },
     { path: "server.js", template: ".server" },

     { path: "src/config/config.json", template: "config-dev" },
     { path: "src/config/index.js", template: "config-index" },
     { path: "src/config/config.dev.json", template: "config" },
     
     { path: "src/middlewares/auth.middleware.js", template: "mw-auth" },
     { path: "src/middlewares/error.middleware.js", template: "mw-error" },
     { path: "src/middlewares/multer.middleware.js", template: "mw-multer" },
     { path: "src/middlewares/pre-route.middleware.js", template: "mw-pre-route" },
     
     { path: "src/routes/index.js", template: "src-route-index" },
     
     { path: "src/utils/custom-error.js", template: "uti-custom-error" },
     { path: "src/utils/multer.js", template: "uti-multer" },
     { path: "src/utils/response.js", template: "uti-response" },

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
          let newFile

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