const multer = require('multer');
const multerS3 = require('multer-s3');
const s3 = require('./aws').S3;

const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: BUCKET_NAME,
        acl: 'public-read',
        metadata: (req, file, callback) => {
            callback(null, {filedName: file.fieldname});
        },
        key: (req, file, callback) => callback(null, `${file.mimetype.split('/')[0]}/${Date.now().toString()}_${file.originalname}`)
        
    })
})
exports.upload = upload;