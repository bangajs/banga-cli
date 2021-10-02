const fs = require("fs")
const multer = require("multer")
const { v4 } = require("uuid")
const { CustomError } = require("./../utils");

let initialReqBody

const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      // Store files in "/uploads" folder
      cb(null, "uploads")
    },
    filename: (req, file, cb) => {
      // Generate unique filename from current date and shortid
      const file_ext = file.originalname.split(".").pop();
      let filename = `${v4()}-${new Date().getTime()}.${file_ext}`;

      cb(null, filename)
    }
  }),

  fileFilter: (req, file, cb) => {
    // Allowed file types
    const mime_types = ["image/jpeg", "image/png", "image/gif", "image/svg+xml", "image/webp", "image/tiff", "audio/webm", "audio/mpeg", "video/webm", "video/x-msvideo", "video/mp4", "application/pdf", "application/vnd.ms-powerpoint", "application/x-tar"]

    // Check if file type is allowed
    if (mime_types.includes(file.mimetype)) {
      cb(null, true)
    } else {
      cb(new CustomError("Invalid file type", 400))
    }
  },

  limits: {
    fileSize: 100 * 1024 * 1024, // 100mb max file size
  },
})

/**
 *  Adds the uploaded files field name property to req.body
 * @param fields - Array of `Field` objects describing multipart form fields to process 
 * - Field object => { name: field_name, maxCount: max_number_of _files}
 */
function addFieldsToReqBody(fields) {
  return async (req, res, next) => {

    if (req.files && typeof req.files === "object") {
      for (const fieldName of Object.keys(req.files)) {
        const fieldMaxCount = fields.find((field, i) => field.name == fieldName).maxCount || 1

        // If field max count of files is 1 then store as string, else store as an array
        if (Array.isArray(req.files[fieldName]) && fieldMaxCount <= 1) {
          req.body[fieldName] = req.files[fieldName][0].path
        } else {
          const fileUrls = []
          for (const file of req.files[fieldName]) {
            fileUrls.push(file.path)
          }
          req.body[fieldName] = fileUrls
        }
      }
    }

    // Preserve inital request body
    req.body = { ...initialReqBody, ...req.body }

    next();
  }
}


/**
 * Returns middlewares that processes multiple files associated with the
 * given form fields.
 *
 * The `Request` object will be populated with field names which
 * has an array|string of the associated file information
 *
 * @param fields - Array of `Field` objects describing multipart form fields to process 
 * 
 * @example
 * upload([{ name: "images", maxCount: 10}])
 */
module.exports = (fields = []) => {
  return [
    (req, res, next) => {
      // Preserve req.body before multer overwrites it
      initialReqBody = req.body
      next()
    },
    upload.fields(fields),
    addFieldsToReqBody(fields)
  ]
}