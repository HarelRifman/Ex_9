const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const articles = require('./routes/article');
const categories = require('./routes/category');

require('custom-env').env(process.env.NODE_ENV, './config');

// MongoDB connection with error handling
mongoose.connect(process.env.CONNECTION_STRING,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('✓ Connected to MongoDB:', process.env.CONNECTION_STRING);
  })
  .catch((error) => {
    console.error('✗ MongoDB connection error:', error.message);
    console.error('Connection string:', process.env.CONNECTION_STRING);
    process.exit(1);
  });

var app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use('/articles', articles);
app.use('/categories', categories);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({ errors: [err.message] });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✓ Server running on http://localhost:${PORT}`);
});

