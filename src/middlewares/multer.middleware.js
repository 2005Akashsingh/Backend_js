import multer from "multer"

const storage = multer.diskStorage({
    destination: function (req,file,cb){
        cb(null,'./public/temp')
    },
    filename: function (req,file,cb){
        cb(null,file.originalname)
    }
})

export const upload = multer({ storage })



// ****check the FileFilter

// var upload = multer({
//     storage: storage,
//     fileFilter: function (req, file, callback) {
//         var ext = path.extname(file.originalname);
//         if(ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
//             return callback(new Error('Only images are allowed'))
//         }
//         callback(null, true)
//     }
// }).single('userFile');


// file.mimetype tells you the true type of the uploaded file based on its content, not just the file extension.
/*
 destination: function (req, file, cb) {
    // ✅ Validate using mimetype
    if (
      file.mimetype === 'image/png' ||
      file.mimetype === 'image/jpg' ||
      file.mimetype === 'image/jpeg' ||
      file.mimetype === 'image/gif'
    ) {
      cb(null, './public/temp');
    } else {
      cb(new Error('Only image files are allowed'), false);
    }
  },

  */
