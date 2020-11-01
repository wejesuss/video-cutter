const { Router } = require("express");

const multer = require("./middlewares/multer");
const { cutVideoController } = require("./useCases/CutVideo");
const { getVideoController } = require("./useCases/GetVideo");

const router = Router();

router.get('/', (_, response) => {
  return response.sendFile('/index.html');
});

router.post('/cut', multer.single('raw'), (request, response) => {
  return cutVideoController.handle(request, response);
});

router.get('/cut/:name', (request, response) => {
  return getVideoController.handle(request, response);
});

module.exports = { router };