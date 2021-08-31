module.exports = {
  docs: "https://bangajs.com",
  url: "https://bangajs.com",
  command_alias: {
    d: "docs",
    docs: "docs",
    g: "generate",
    generate: "generate",
    h: "help",
    help: "help",
    n: "new",
    new: "new",
    v: "version",
    version: "version",
  },
  commands: {
    new: {
      auth: true,
      dep: true,
      force: false,
      git: true,
      session: false,
    },
    generate: {
      auth: false,
      controller: true,
      create: true,
      crud: true,
      default: true,
      delete: true,
      force: false,
      model: true,
      read: true,
      root: false,
      route: true,
      service: true,
      update: true
    }
  }
}