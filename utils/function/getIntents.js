const config = require('../../config.json');
const intentsList = config.client.intents;
module.exports = async () => {
    var intents = []
    intentsList.forEach((intent) => {
        if(intents.value) {
            intents.push(intent.name);
        }
    });
    return intents;
    console.log(intents)
}