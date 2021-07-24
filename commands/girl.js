const { getFlickrPhoto } = require('../flickr');

module.exports = {
    name: 'girl',
    description: 'Get a beautiful girl',
    async execute(message, args) {
        const { url_c: photoUrl, url_q: photoThumbnail } = await getFlickrPhoto();
        const exampleEmbed = {
            title: `This is boss's hot chick. Enjoy your meal!`,
            thumbnail: {
                url: photoThumbnail,
            },
            image: {
                url: photoUrl,
            },
        }
        message.channel.send(`Hello, Boss ${message.author.username}! I'm looking for a chick for you...`);
        message.channel.send({ embed: exampleEmbed });
    },
};
