const { closeSync } = require("fs-extra");

class Banga extends Error {
     constructor(message) {
          super(message)
     }
}