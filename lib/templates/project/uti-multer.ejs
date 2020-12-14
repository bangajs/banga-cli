const multer = require('multer')
const shortid = require('shortid');
const CustomError = require('./custom-error');

const storage = multer.diskStorage({
     destination: (req, file, cb) => {
          // Store files in "uploads" folder
          cb(null, 'uploads')
     },
     filename: (req, file, cb) => {
          // Generate unique filename form current date and shortid
          const fileExt = file.originalname.split(".").pop();
          let filename = `${shortid.generate()}_${new Date().getTime()}.${fileExt}`;

          cb(null, filename)
     }
})

const limits = {
     // Maximum file size of 5mb
     fileSize: 5 * 1024 * 1024,
}

const fileFilter = (req, file, cb) => {
     //Accepted file types
     const mimeTypes = ["image/jpeg", "image/png"]

     // Check if file type is accepted
     if (mimeTypes.includes(file.mimetype)) {
          cb(null, true)
     } else {
          cb(new CustomError("Invalid file type", 400), false)
     }
}

module.exports = multer({ storage, limits, fileFilter });