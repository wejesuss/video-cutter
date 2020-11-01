const { resolve } = require("path");
const { CreateTemporaryFolder } = require("./CreateTemporaryFolder");

const createTemporaryFolder = new CreateTemporaryFolder(resolve(__dirname, '..', '..', '..', 'temp'));

module.exports = { createTemporaryFolder };