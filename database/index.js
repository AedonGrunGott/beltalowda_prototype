const mongoose = require('mongoose');
mongoose.connect(`mongodb://localhost/${process.env.MONGO_DB}`);
const database = mongoose.connection;

const { Schema } = mongoose;


database.on('error', (error) => {
  console.error('DATABSE:', error);
});
database.on('open', () => {
  console.info('DATABASE: connected');
});


const messageSchema = mongoose.Schema({
  message: String,
  sender: String,
});
const Message = mongoose.model('Message', messageSchema);

const userSchema = mongoose.Schema({
  name: String,
  level: Number,
  faction: {
    type: String,
    enum: ['belter', 'mcrn', 'un'],
  },
});
const User = mongoose.model('User', userSchema);

const shipSchema = mongoose.Schema({
  name: String,
  level: Number,
  url: String,
});
const Ship = mongoose.model('Ship', shipSchema);


module.exports = {
  database,
  Message,
  Ship,
  User,
};
