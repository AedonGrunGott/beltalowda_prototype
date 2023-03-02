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
  shipsUnlocked: [
    {
      type: Schema.Types.ObjectId,
    },
  ],
});
const User = mongoose.model('User', messageSchema);

const shipSchema = mongoose.Schema({
  name: String,
  url: String,
});
const Ship = mongoose.model('Ship', messageSchema);


module.exports = {
  database,
  Message,
  Ship,
  User,
};
