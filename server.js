require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const designRoutes = require('./routes/designRoutes');
const productRoutes = require('./routes/productRoutes');
const designerRoutes = require('./routes/designerRoutes');
const consultationRoutes = require('./routes/consultationRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const blogRoutes = require('./routes/blogRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/designs', designRoutes);
app.use('/api/products', productRoutes);
app.use('/api/designers', designerRoutes);
app.use('/api/consultations', consultationRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/blogs', blogRoutes);

// error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({ message: err.message || 'Server Error' });
});

const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URI || 'mongodb+srv://mujtabakalmati:Baloch%402428@cluster0.uvlasp7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(()=> {
    console.log('MongoDB connected');
    app.listen(PORT, ()=> console.log('Server running on port', PORT));
  })
  .catch(err => {
    console.error('Mongo error', err);
    process.exit(1);
  });
