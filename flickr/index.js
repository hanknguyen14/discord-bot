const { config } = require('../config.js');
const Flickr = require('flickr-sdk');
const flickr = new Flickr(config.FLICKR_API_KEY);

const MAX_PAGE = 2900;
const flickrDefaultParams = {
    extras: 'url_c, url_q',
    per_page: 1,
    format: 'json',
    nojsoncallback: 1,
};

module.exports.getFlickrPhoto = async () => {
    try {
        const randomPage = Math.floor(Math.random() * MAX_PAGE);
        const result = await flickr.people.getPhotos({
            ...flickrDefaultParams,
            user_id: config.FLICKR_USER_ID,
            page: randomPage,
        });
        const { photo = [] } = result.body.photos;
        return photo[0];
    }
    catch (error) {
        console.log(error);
    }
};

