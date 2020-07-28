const axios = require('axios');
const Flickr = require('flickr-sdk');

const feeds = new Flickr.Feeds();

exports.publicPhotos = async (req, res, next) => {
  const publicPhotos = feeds.publicPhotos();
  const feed = await axios.get(`${publicPhotos.url}?format=json&nojsoncallback=1`);
  const publicFeed = feed.data.items.map(e => e.link);
  res.status(200).send(publicFeed);
};

exports.getTagPhotos = async (req, res, next) => {
  const { tag } = req.params;
  const publicPhotos = feeds.publicPhotos();
  const feed = await axios.get(`${publicPhotos.url}?format=json&nojsoncallback=1&tags=${tag}`);
  const filteredFeed = feed.data.items.map(e => e.link);
  if(filteredFeed.length !== 0){
    res.status(200).send(filteredFeed);
  } else {
    res.status(200).send('No results for this tag');
  }
};
