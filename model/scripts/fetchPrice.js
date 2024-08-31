const axios = require('axios');
const mongoose = require('mongoose');
const EthereumPrice = require('../models/EthereumPrice');

const mongoURI = 'YOUR_MONGODB_CONNECTION_STRING';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

async function fetchAndStorePrice() {
  try {
    const response = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=inr');
    const priceInINR = response.data.ethereum.inr;

    const newPrice = new EthereumPrice({ priceInINR });
    await newPrice.save();

    console.log('Price fetched and stored:', priceInINR);
  } catch (error) {
    console.error('Error fetching or storing price:', error);
  }
}

fetchAndStorePrice();
setInterval(fetchAndStorePrice, 10 * 60 * 1000); 
