const express = require('express');
const Gamedig = require('gamedig');
const app = express();
const cors = require('cors');

// Enable CORS for frontend requests
app.use(cors());

app.get('/api/gameserver', async (req, res) => {
  try {
    const state = await Gamedig.query({
      type: 'protocol-valve',
      host: '192.168.2.14',
      port: 26901,
    });
    res.json(state);
  } catch (error) {
    console.error('Error fetching server info:', error);
    res.status(500).json({ error: 'Unable to fetch server info' });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Backend server is running on port ${PORT}`);
});
