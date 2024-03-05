const mongoose = require('mongoose');

// mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/techmatchup');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/walletwatch');


module.exports = mongoose.connection;
