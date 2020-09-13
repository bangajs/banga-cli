
const User = require("./../models/user");
const CustomError = require("./../utils/CustomError");

class UserService {
     async create(data) {
          const userExist = await User.findOne({ email: data.email })
          if (userExist) throw new CustomError("Email already exists");

          const user = new User(data);
          const token = await jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET);
          await user.save();

          //send mail
          MailService.sendMail()

          return data = {
               uid: user._id,
               email: user.email,
               role: user.role,
               token: token
          };
     }

     async authenticate(data) {
          if (!data.email) throw new CustomError("Email is required");
          if (!data.password) throw new CustomError("Password is required");

          const user = await User.findOne({ email: data.email });
          if (!user) throw new CustomError("Incorrect email or password");
          const passwordValid = await bcrypt.compare(data.password, user.password)
          if (!passwordValid) throw new CustomError("Incorrect email or password");

          const token = await jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET);

          return data = {
               uid: user._id,
               email: user.email,
               role: user.role,
               token: token
          };
     }

     async getMany() {
          const user = await User.find({}, { password: 0 });
          return user
     }

     async getOne(userId) {
          const user = await User.findOne({ _id: userId }, { password: 0 });
          return user;
     }

     async update(userId, data) {
          const user = await User.findByIdAndUpdate(
               { _id: userId },
               data,
               { new: true, }
          );

          if (!user) throw new CustomError("User dosen't exist", 404);

          return user;
     }

     async delete(userId) {
          const user = await User.findOne({ _id: userId });
          user.remove()
          return user
     }
}

module.exports = new UserService();
