const router = require('express').Router()
const {publicPhotos} = require('../controllers/flickrController')

router.get('/public', publicPhotos)

module.exports = router