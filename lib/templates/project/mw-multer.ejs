const upload = require("./../utils/multer")

async function addPathToBody(req, res, next) {
     if (req.files)
          req.body["images"] = req.files.map(file => file.path.replace("\\", "/"))
     
     if (req.file) 
          req.body["image"] = req.file.path.replace("\\", "/")

     next();
}

module.exports = (field) => {
     return [upload.single(field), addPathToBody]
}
