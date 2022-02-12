let mongoose = require('mongoose');

function connect() {
  return mongoose.connect('mongodb://root:example@localhost:27888/?authSource=admin')
    .catch(err => {
      console.log(err)
    });
}
  
function disconnect() {
  return mongoose.disconnect();
}

module.exports = {
  connectDb: connect,
  disconnectDb: disconnect
};
