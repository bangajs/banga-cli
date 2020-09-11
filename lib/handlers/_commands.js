const handlers = require("./index")


function getType(type) {
     return {
          asset: handlers.asset[type],
          controller: handlers.controller[type],
          route: handlers.route[type],
          model: handlers.model[type],
          project: handlers.project[type],
          service: handlers.service[type],
     }
}

let commands = {}

commands.create = getType("create")
commands.delete = getType("delete")
commands.reset = getType("reset")

module.exports = commands