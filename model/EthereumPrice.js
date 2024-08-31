const mongoose = require('mongoose');

const ethereumPriceSchema = new mongoose.Schema({
  priceInINR: {
    type: Number,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('EthereumPrice', ethereumPriceSchema);
