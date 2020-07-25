const axios = require('axios');
const Flickr = require('flickr-sdk');

const feeds = new Flickr.Feeds();

exports.publicPhotos = async (req, res, next) => {
    const publicPhotos = feeds.publicPhotos();
  const info = await axios.get(`${publicPhotos.url}?format=json&nojsoncallback=1`);
  const publicFeed = info.data.items.map((e) => e.link)
  res.status(200).send(publicFeed)
};
