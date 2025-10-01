const express = require('express');
const axios = require('axios');
const cors = require('cors');

require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', {
    
})

app.post('/proxy', async (req, res) => {
  try {
    const { action, ...data } = req.body;
    const backendUrl = process.env.BACKEND_URL
    const response = await axios.post(backendUrl, {
      action,
      ...data
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = app;