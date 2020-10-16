const FM = require("./../utils/file-manager")
const TextFormatter = require("./../utils/text-formatter")
const help = require("./help")
const ARGS = process.ARGS

const alias = {
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

const types = ["controller", "model", "route", "service"]

async function createFile() {
     const { $type, $name } = ARGS
     const template = require(`./../templates/${$type}`)($name)

     let path = FM.pathParser(null, $name, $type)
     await FM.create(path, template)
}

async function createAsset() {
     for (const type of types) {
          ARGS.$type = type
          await createFile(ARGS)
     }
}

module.exports = async () => {
     try {
          // Check if name and type
          if (!ARGS._[1]) throw new Error(`banga: "<type>" is required`)
          if (!ARGS._[2]) throw new Error(`banga: "<name>" is required`)

          const type = alias[ARGS._[1]]
          const name = TextFormatter(ARGS._[2])

          if (!alias[type]) {
               throw new Error(`banga: '${ARGS._[1]}' is not a recognised type or alias`)
          }

          ARGS.$type = type
          ARGS.$name = name

          if (type == "asset") {
               await createAsset(ARGS)
          } else {
               await createFile(ARGS)
          }
     } catch (error) {
          console.log(error.message)
          help()
     }
}