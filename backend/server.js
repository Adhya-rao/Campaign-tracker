const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

if (!process.env.JWT_SECRET) {
  console.error('Error: JWT_SECRET environment variable is not set.');
  process.exit(1);
}


const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.options('*', cors());
app.use(express.json());

const DATABASE_URL = 'mongodb://localhost:27017/Ginger';
mongoose.connect(DATABASE_URL)
  .then(() => {
    console.log('Connected to MongoDB (Ginger database)');
    console.log('Database name:', mongoose.connection.name);
    console.log('Collection for campaigns:', mongoose.model('Campaign').collection.name);
  })
  .catch((err) => console.error('MongoDB connection error:', err));

app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/campaigns', require('./routes/campaignRoutes'));

app.get('/', (req, res) => {
  res.send('Campaign Tracker Backend is running!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

