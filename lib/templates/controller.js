module.exports = (name) =>{
return`const ${name.pascal}Serv = require("./../services/${name.kebab}.service");
const response = require("./../utils/response");

class ${name.pascal}Contoller {
  async create(req, res) {
    const result = await ${name.pascal}Serv.create(req.body);
    res.status(201).send(response("${name.space} created", result));
  }

  async authenticate(req, res) {
    const result = await authenticate(req.body);
    res.status(200).send(response("${name.space} signed in", result));
  }

  async getMany(req, res) {
    const result = await ${name.pascal}Serv.getMany();
    res.status(200).send(response("${name.space}s", result));
  }

  async getOne(req, res) {
    const result = await ${name.pascal}Serv.getOne(req.params.${name.camel}Id);
    res.status(200).send(response("${name.space}", result));
  }

  async update(req, res) {
    const result = await ${name.pascal}Serv.update(req.params.${name.camel}Id, req.body);
    res.status(200).send(response("${name.space} updated", result));
  }

  async delete(req, res) {
    const result = await ${name.pascal}Serv.delete(req.params.${name.camel}Id);
    res.status(200).send(response("${name.space} deleted", result));
  }
}

module.exports = new ${name.pascal}Contoller();
`}