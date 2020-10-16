module.exports = (name) =>{
return`const ${name.toPascalCase()}Serv = require("./../services/${name.toKebabCase()}.service");
const response = require("./../utils/response");

class ${name.toPascalCase()}Contoller {
  async create(req, res) {
    const result = await ${name.toPascalCase()}Serv.create(req.body);
    res.status(201).send(response("${name.toSentenceCase()} created", result));
  }

  async authenticate(req, res) {
    const result = await authenticate(req.body);
    res.status(200).send(response("${name.toSentenceCase()} signed in", result));
  }

  async getMany(req, res) {
    const result = await ${name.toPascalCase()}Serv.getMany();
    res.status(200).send(response("${name.toSentenceCase()}s", result));
  }

  async getOne(req, res) {
    const result = await ${name.toPascalCase()}Serv.getOne(req.params.${name.toCamelCase()}Id);
    res.status(200).send(response("${name.toSentenceCase()}", result));
  }

  async update(req, res) {
    const result = await ${name.toPascalCase()}Serv.update(req.params.${name.toCamelCase()}Id, req.body);
    res.status(200).send(response("${name.toSentenceCase()} updated", result));
  }

  async delete(req, res) {
    const result = await ${name.toPascalCase()}Serv.delete(req.params.${name.toCamelCase()}Id);
    res.status(200).send(response("${name.toSentenceCase()} deleted", result));
  }
}

module.exports = new ${name.toPascalCase()}Contoller();
`}