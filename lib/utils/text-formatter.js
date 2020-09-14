class TextFormatter {
     constructor(text) {
          this.text = text.toLowerCase().trim()
          this.textSplit = this.text.split(/_|\s|-/gm)
     }

     get camel() {
          return this.textSplit.map((t, index) => {
               if (index > 0)
                    return t.charAt(0).toUpperCase() + t.slice(1)
               return t
          }).join("")
     }

     get kebab() {
          return this.text.replace(/_|\s|-/gm, "-")
     }

     get lower(){
          return this.text
     }

     get pascal() {
          return this.textSplit.map(t => t.charAt(0).toUpperCase() + t.slice(1)).join("")
     }

     get snake() {
          return this.text.replace(/_|\s|-/gm, "_")
     }

     get space() {
          return this.text.replace(/_|\s|-/gm, " ")
     }
}

module.exports = TextFormatter