const router = require('express').Router();
const { publicPhotos, getTagPhotos } = require('../controllers/flickrController');

router.get('/public', publicPhotos);

router.get('/filtered/:tag', getTagPhotos);

module.exports = router;
