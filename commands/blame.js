module.exports = {
    name: 'blame',
    description: 'Blame some one',
    execute(message, args) {
        const taggedUser = message.mentions.users.first();
        if (!taggedUser) {
            return message.channel.send('Who do you want to blame?');
        }
        return message.channel.send(`You are a loser, ${taggedUser.username}!`);
    },
};
