
const Book = require("./../models/book");
const CustomError = require("./../utils/CustomError");

class BookService {
     async create(data) {
          const bookExist = await Book.findOne({ email: data.email })
          if (bookExist) throw new CustomError("Email already exists");

          const book = new Book(data);
          const token = await jwt.sign({ id: book._id, role: book.role }, process.env.JWT_SECRET);
          await book.save();

          //send mail
          MailService.sendMail()

          return data = {
               uid: book._id,
               email: book.email,
               role: book.role,
               token: token
          };
     }

     async authenticate(data) {
          if (!data.email) throw new CustomError("Email is required");
          if (!data.password) throw new CustomError("Password is required");

          const book = await Book.findOne({ email: data.email });
          if (!book) throw new CustomError("Incorrect email or password");
          const passwordValid = await bcrypt.compare(data.password, book.password)
          if (!passwordValid) throw new CustomError("Incorrect email or password");

          const token = await jwt.sign({ id: book._id, role: book.role }, process.env.JWT_SECRET);

          return data = {
               uid: book._id,
               email: book.email,
               role: book.role,
               token: token
          };
     }

     async getMany() {
          const book = await Book.find({}, { password: 0 });
          return book
     }

     async getOne(bookId) {
          const book = await Book.findOne({ _id: bookId }, { password: 0 });
          return book;
     }

     async update(bookId, data) {
          const book = await Book.findByIdAndUpdate(
               { _id: bookId },
               data,
               { new: true, }
          );

          if (!book) throw new CustomError("Book dosen't exist", 404);

          return book;
     }

     async delete(bookId) {
          const book = await Book.findOne({ _id: bookId });
          book.remove()
          return book
     }
}

module.exports = new BookService();
