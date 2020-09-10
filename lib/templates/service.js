module.exports = (name) => {
     return `
const ${name.pascal} = require("./../models/${name.camel}");
const CustomError = require("./../utils/CustomError");

class ${name.pascal}Service {
     async create(data) {
          const ${name.camel}Exist = await ${name.pascal}.findOne({ email: data.email })
          if (${name.camel}Exist) throw new CustomError("Email already exists");

          const ${name.camel} = new ${name.pascal}(data);
          const token = await jwt.sign({ id: ${name.camel}._id, role: ${name.camel}.role }, process.env.JWT_SECRET);
          await ${name.camel}.save();

          //send mail
          MailService.sendMail()

          return data = {
               uid: ${name.camel}._id,
               email: ${name.camel}.email,
               role: ${name.camel}.role,
               token: token
          };
     }

     async authenticate(data) {
          if (!data.email) throw new CustomError("Email is required");
          if (!data.password) throw new CustomError("Password is required");

          const ${name.camel} = await ${name.pascal}.findOne({ email: data.email });
          if (!${name.camel}) throw new CustomError("Incorrect email or password");
          const passwordValid = await bcrypt.compare(data.password, ${name.camel}.password)
          if (!passwordValid) throw new CustomError("Incorrect email or password");

          const token = await jwt.sign({ id: ${name.camel}._id, role: ${name.camel}.role }, process.env.JWT_SECRET);

          return data = {
               uid: ${name.camel}._id,
               email: ${name.camel}.email,
               role: ${name.camel}.role,
               token: token
          };
     }

     async getMany() {
          const ${name.camel} = await ${name.pascal}.find({}, { password: 0 });
          return ${name.camel}
     }

     async getOne(${name.camel}Id) {
          const ${name.camel} = await ${name.pascal}.findOne({ _id: ${name.camel}Id }, { password: 0 });
          return ${name.camel};
     }

     async update(${name.camel}Id, data) {
          const ${name.camel} = await ${name.pascal}.findByIdAndUpdate(
               { _id: ${name.camel}Id },
               data,
               { new: true, }
          );

          if (!${name.camel}) throw new CustomError("${name.pascal} dosen't exist", 404);

          return ${name.camel};
     }

     async delete(${name.camel}Id) {
          const ${name.camel} = await ${name.pascal}.findOne({ _id: ${name.camel}Id });
          ${name.camel}.remove()
          return ${name.camel}
     }
}

module.exports = new ${name.pascal}Service();
`
}