const multer = require("multer");
const { randomBytes } = require("crypto");
const { resolve, extname } = require("path");
const { createTemporaryFolder } = require("../useCases/CreateTemporaryFolder");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        createTemporaryFolder.execute(true, 'raw', 'edited');

        req.editedFolder = resolve(createTemporaryFolder.path, 'edited');
        req.rawFolder = resolve(createTemporaryFolder.path, 'raw');

        cb(null, req.rawFolder);
    },
    filename: (req, file, cb) => {
        const random = randomBytes(10).toString('hex');
        const ext = extname(file.originalname);
        
        cb(null, `${random}${ext}`);
    }
})

const fileFilter = (req, file, cb) => {
    const isAcceptable = [
        'video/mp4',
        'video/webm',
        'video/ogg',
        'video/x-flv',
        'video/3gpp',
        'video/x-msvideo',
        'video/x-ms-wmv',
        'video/mpg'
    ].find(acceptable => acceptable === file.mimetype);

    if(isAcceptable) {
        return cb(null, true);
    }

    return cb(null, false);
}

module.exports = {
    storage,
    fileFilter
}