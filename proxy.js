const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = 3001; // Port for the proxy server

// Enable CORS for your React app (http://localhost:3000)
const corsOptions = {
  origin: 'http://localhost:3000',
};

app.use(cors(corsOptions));

app.get('/api/runescape', async (req, res) => {
  try {
    const response = await axios.get(
      'http://services.runescape.com/m=itemdb_oldschool/api/catalogue/items.json?category=1&alpha=a&page=1'
    );
    res.json(response.data);
    // console.log(response.data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server is running on port ${PORT}`);
});