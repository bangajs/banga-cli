function TextFormatter(txt) {
     const text = txt.toLowerCase().trim()
     const textSplit = text.split(/_|\s|-/gm)

     String.prototype.toCamelCase = function () {
          return textSplit.map((t, index) => {
               if (index > 0)
                    return t.charAt(0).toUpperCase() + t.slice(1)
               return t
          }).join("")
     }

     String.prototype.toKebabCase = function () {
          return text.replace(/_|\s|-/gm, "-")
     }

     String.prototype.toPascalCase = function () {
          return textSplit.map(t => t.charAt(0).toUpperCase() + t.slice(1)).join("")
     }

     String.prototype.toSnakeCase = function () {
          return text.replace(/_|\s|-/gm, "_")
     }

     String.prototype.toSentenceCase = function () {
          return text.replace(/_|\s|-/gm, " ")
     }


     return txt
}

module.exports = TextFormatter