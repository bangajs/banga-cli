const path = require("path")
const ejs = require("ejs")
const fs = require("fs-extra")
const { spawn } = require('child_process');

const clr = require("./../config/defaults").color

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

class Project {
     async create(args) {
          const { name } = args

          for (let file of projectFiles) {
               const templatePath = path.join(__dirname, `./../templates/project/${file.template}.ejs`)
               const filePath = `${name.lower}/${file.path}`

               if (file.template == "")
                    await fs.mkdir(filePath)

               else
                    ejs.renderFile(templatePath, {}, {}, async (err, str) => {
                         if (err) throw err

                         fs.ensureFileSync(filePath)
                         fs.outputFileSync(filePath, str)

                         //Log to the console on successful file creation
                         const command = `${clr.green}CREATE${clr.reset}`
                         const file = `${clr.underscore}${filePath}${clr.reset}`
                         console.log(`${command}: ${file}`)

                    })
          }



          const processDefaults = {
               cwd: process.cwd() + "/" + name.lower,
               shell: true
          };

          // create user asset
          const banga = spawn('banga', ["generate", "asset", "user"], processDefaults);

          console.log(processDefaults.cwd)

          banga.stdout.on('data', (data) => {
               console.log(`${data}`);
          });

          banga.stderr.on('data', (data) => {
               console.error(`stderr: ${data}`);
          });

          banga.on('close', (code) => {
               console.log(`child process exited with code ${code}`);
          });


          // Run npm install
          const npm = spawn('npm', ['install'], processDefaults);

          npm.stdout.on('data', (data) => {
               console.log(`${data}`);
          });

          npm.stderr.on('data', (data) => {
               console.error(`stderr: ${data}`);
          });

          npm.on('close', (code) => {
               console.log(`child process exited with code ${code}`);
          });


          // Start server
          const start = spawn('npm', ["run", "dev"], processDefaults);

          start.stdout.on('data', (data) => {
               console.log(`${data}`);
          });

          start.stderr.on('data', (data) => {
               console.error(`stderr: ${data}`);
          });

          start.on('close', (code) => {
               console.log(`child process exited with code ${code}`);
          });
     }
}

module.exports = new Project()