const handler = require("./index")


function getType(type) {
     return {
          asset: handler.Asset[type],
          controller: handler.Controller[type],
          route: handler.Route[type],
          model: handler.Model[type],
          project: handler.Project[type],
          service: handler.Service[type],
     }
}

const mode = {}

mode.create = getType("create")

mode.remove = getType("remove")

mode.reset = getType("reset")

module.exports = mode