const chalk = require('chalk');
const ejs = require("ejs");
const path = require("path");
const spawnSync = require('child_process').spawnSync;

const app = require('../bootstrap');
const FM = require("./../utils/file-manager");
const FormatString = require("../utils/format-string");
const ARGS = process.ARGS;

const projectFiles = [
  { path: ".env.example", template: ".env-example", options: [] },
  { path: ".env", template: ".env", options: [] },
  { path: ".gitignore", template: ".gitignore", options: [] },
  { path: "banga-config.json", template: ".banga-config", options: [] },
  { path: "package.json", template: ".package", options: [] },
  { path: "README.md", template: ".readme", options: [] },
  { path: "server.js", template: ".server", options: [] },

  { path: "src/config/mongo-db.config.js", template: "config-mongodb", options: [] },
  { path: "src/config/index.js", template: "config-index", options: [] },

  { path: "src/middlewares/auth.middleware.js", template: "mw-auth", options: ["auth"] },
  { path: "src/middlewares/error.middleware.js", template: "mw-error", options: [] },
  { path: "src/middlewares/upload.middleware.js", template: "mw-multer", options: [] },
  { path: "src/middlewares/pre-route.middleware.js", template: "mw-pre-route", options: [] },

  { path: "src/controllers/auth.controller.js", template: "src-controller-auth", options: ["auth"] },
  { path: "src/controllers/user.controller.js", template: "src-controller-user", options: ["auth"] },

  { path: "src/models/token.model.js", template: "src-model-token", options: ["auth"] },
  { path: "src/models/user.model.js", template: "src-model-user", options: ["auth"] },

  { path: "src/routes/auth.route.js", template: "src-route-auth", options: ["auth"] },
  { path: "src/routes/index.js", template: "src-route-index", options: [] },
  { path: "src/routes/user.route.js", template: "src-route-user", options: ["auth"] },

  { path: "src/services/auth.service.js", template: "src-service-auth", options: ["auth"] },
  { path: "src/services/mail.service.js", template: "src-service-mail", options: [] },
  { path: "src/services/user.service.js", template: "src-service-user", options: ["auth"] },

  { path: "src/utils/custom-error.js", template: "src-utils-custom-error", options: [] },
  { path: "src/utils/index.js", template: "src-utils-index", options: [] },
  { path: "src/utils/response.js", template: "src-utils-response", options: [] },

  { path: "src/validators/", template: null, options: [] },

  { path: "public/", template: null, options: [] },
  { path: "tests/", template: null, options: [] },
  { path: "uploads/.gitignore", template: ".gitignore", options: [] },
  { path: "views/", template: null, options: [] },
]

function execShellCommand(command = "banga", args = []) {
  const processDefaults = {
    cwd: process.cwd() + "/" + ARGS.$project_name,
    shell: true,
    stdio: 'inherit'
  };

  const ls = spawnSync(command, args, processDefaults)

  // Terminate process when error occurs
  if (ls.stderr) {
    console.error(ls.stderr)
    process.exitCode = 1;
  }
}


module.exports = async () => {
  try {
    // Validate project name
    const parsedName = app.parseName(ARGS._[1])
    if (!parsedName) throw new Error(`banga: '${ARGS._[2]}' is an invalid name`)

    ARGS.$project_name = FormatString(parsedName.name)
    ARGS.root = true

    // Create project files
    console.log(chalk.bold("\n⏳ Creating Project files...\n"))
    for (let file of projectFiles) {
      if (app.canRender(file.options)) {
        const filePath = `${ARGS.$project_name}/${file.path}`
        const templatePath = path.join(__dirname, `./../templates/project/${file.template}.ejs`)

        const data = file.template ? await ejs.renderFile(templatePath, { canRender: app.canRender, ...ARGS }, {}) : null
        let newFile = await FM.create(filePath, data)

        if (newFile.status == "exists")
          console.log(`${chalk.yellow("EXISTS")}: ${newFile.full}`)
        else
          console.log(`${chalk.green("CREATE")}: ${newFile.full}`)
      }
    }
    console.log(chalk.cyan("\n✅ Created project files."))

    // Install dependencies - npm install
    if (ARGS.dep) {
      console.log(chalk.bold("\n\n\n⏳ Installing packages...\n"))
      execShellCommand("npm", ["install"])
      console.log(chalk.cyan("✅ Packages installed."))
    }

    // Initialize git - git init
    if (ARGS.git) {
      console.log(chalk.bold("\n\n\n⏳ Initialising git...\n"))
      execShellCommand("git", ["init"])
      console.log(chalk.cyan("\n✅ Git initialised."))
    }

    // All set 
    console.log(chalk.cyan("\n\n\n✅ All set! You're good to go! \n\n"))

  } catch (error) {
    console.log(chalk.red(error.message))
    help()
  }
}