
const Man = require("./../models/man");
const CustomError = require("./../utils/CustomError");

class ManService {
     async create(data) {
          const manExist = await Man.findOne({ email: data.email })
          if (manExist) throw new CustomError("Email already exists");

          const man = new Man(data);
          const token = await jwt.sign({ id: man._id, role: man.role }, process.env.JWT_SECRET);
          await man.save();

          //send mail
          MailService.sendMail()

          return data = {
               uid: man._id,
               email: man.email,
               role: man.role,
               token: token
          };
     }

     async authenticate(data) {
          if (!data.email) throw new CustomError("Email is required");
          if (!data.password) throw new CustomError("Password is required");

          const man = await Man.findOne({ email: data.email });
          if (!man) throw new CustomError("Incorrect email or password");
          const passwordValid = await bcrypt.compare(data.password, man.password)
          if (!passwordValid) throw new CustomError("Incorrect email or password");

          const token = await jwt.sign({ id: man._id, role: man.role }, process.env.JWT_SECRET);

          return data = {
               uid: man._id,
               email: man.email,
               role: man.role,
               token: token
          };
     }

     async getMany() {
          const man = await Man.find({}, { password: 0 });
          return man
     }

     async getOne(manId) {
          const man = await Man.findOne({ _id: manId }, { password: 0 });
          return man;
     }

     async update(manId, data) {
          const man = await Man.findByIdAndUpdate(
               { _id: manId },
               data,
               { new: true, }
          );

          if (!man) throw new CustomError("Man dosen't exist", 404);

          return man;
     }

     async delete(manId) {
          const man = await Man.findOne({ _id: manId });
          man.remove()
          return man
     }
}

module.exports = new ManService();
