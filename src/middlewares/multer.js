const multer = require("multer");
const uploadConfig = require("../config/multer");

module.exports = multer(uploadConfig);