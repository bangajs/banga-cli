class Asset {
     async create(args) {
          const { name } = args
          await require("./controller").create({ name })
          await require("./model").create({ name })
          await require("./route").create({ name })
          await require("./service").create({ name })
     }
}

module.exports = new Asset()