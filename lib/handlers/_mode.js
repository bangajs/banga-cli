const handler = require("./index")


function getType(type) {
     return {
          asset: handler.asset[type],
          controller: handler.controller[type],
          route: handler.route[type],
          model: handler.model[type],
          project: handler.project[type],
          service: handler.service[type],
     }
}

let mode = {}
mode.create = getType("create")

mode.delete = getType("delete")

mode.reset = getType("reset")

module.exports = mode