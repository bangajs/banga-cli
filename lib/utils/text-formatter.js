function TextFormatter(txt) {
     const text = txt.toLowerCase().trim()
     const textSplit = text.split(/_|\s|-/gm)

     String.prototype.camelCase = function () {
          return textSplit.map((t, index) => {
               if (index > 0)
                    return t.charAt(0).toUpperCase() + t.slice(1)
               return t
          }).join("")
     }

     String.prototype.kebabCase = function () {
          return text.replace(/_|\s|-/gm, "-")
     }

     String.prototype.lower = function () {
          return text
     }

     String.prototype.pascalCase = function () {
          return textSplit.map(t => t.charAt(0).toUpperCase() + t.slice(1)).join("")
     }

     String.prototype.snakeCase = function () {
          return text.replace(/_|\s|-/gm, "_")
     }

     String.prototype.spaceCase = function () {
          return text.replace(/_|\s|-/gm, " ")
     }


     return txt
}

module.exports = TextFormatter