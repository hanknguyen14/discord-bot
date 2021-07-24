const dotenv = require('dotenv');

// Config env
dotenv.config();

module.exports = {
    config: {
        DISCORD_BOT_TOKEN: process.env.DISCORD_BOT_TOKEN,
        FLICKR_API_KEY: process.env.FLICKR_API_KEY,
        FLICKR_GROUP_ID: process.env.FLICKR_GROUP_ID,
        FLICKR_USER_ID: process.env.FLICKR_USER_ID,
        PREFIX_MESSAGE: process.env.PREFIX_MESSAGE,
    },
};
