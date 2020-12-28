const chalk = require('chalk');
const ejs = require("ejs")
const path = require("path");

const app = require('./../utils/app');
const FM = require("./../utils/file-manager")
const TextFormatter = require("./../utils/text-formatter")
const help = require("./help")

const ARGS = process.ARGS

const types = ["controller", "model", "route", "service"]
const typeAlias = {
     a: "asset",
     asset: "asset",
     c: "controller",
     controller: "controller",
     m: "model",
     model: "model",
     r: "route",
     route: "route",
     s: "service",
     service: "service"
}


// Create a specific file "type"
async function createFile() {
     const { $type, $name } = ARGS
     const templatePath = path.join(__dirname, `./../templates/asset/${$type}.ejs`)
     const data = await ejs.renderFile(templatePath, { canRender: app.canRender, ...ARGS }, {})

     const newFile = await FM.create(null, data)

     if (newFile.status == "exists")
          console.log(`${chalk.yellow("EXISTS")}: ${$name} ${$type} - ${newFile.full}`)
     else
          console.log(`${chalk.green("CREATE")}: ${$name} ${$type} - ${newFile.full}`)
}

// Create all all file "types"
async function createAsset() {
     for (const type of types) {
          if (app.canRender([type])) {
               ARGS.$type = type
               await createFile()
          }
     }
}

module.exports = async (type, name) => {
     try {
          // Check if "name" and "type"
          if (!ARGS._[1] && !name) throw new Error(`banga: "<type>" is required`)
          if (!ARGS._[2] && !type) throw new Error(`banga: "<name>" is required`)

          type = type ? typeAlias[type] : typeAlias[ARGS._[1]]

          // Check if "name" is valid
          const parseName = app.parseName(ARGS._[2])
          if (!parseName) throw new Error(`banga: '${ARGS._[2]}' is an invalid name`)
          name = name ? TextFormatter(parseName.name) : TextFormatter(parseName.name)

          // Check if "type" is valid
          if (!typeAlias[type]) {
               throw new Error(`banga: '${ARGS._[1]}' is not a recognised type or alias`)
          }

          // Add type, name and parsedName.path to process.ARGS
          ARGS.$type = type
          ARGS.$name = name
          ARGS.$path = parseName.path

          // Check what "type" of files to create
          if (type == "asset") {
               await createAsset()
          } else {
               await createFile()
          }

          console.log("")
     } catch (error) {
          console.log(chalk.red(error.message))
          help()
     }
}