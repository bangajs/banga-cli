class Logger {
     constructor() {

     }

     create(options) {
          const { type, text, location, } = options
          const css = 'color:#2ecc71; font-size:18px; font-weight: bold;'
          let txt = `%c${type} : ${text} %c@ location`
          console.log(txt, css)
     }
}

module.exports = new Logger()