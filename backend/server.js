const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const connectDB = require('./config/db');
const cors = require('cors');

dotenv.config({ path: path.resolve(__dirname, '.env') });

connectDB();

const app = express();

const adminRoutes = require('./routes/adminRoutes');
const menuRoutes = require('./routes/menuRoutes');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.use('/api/admin', adminRoutes);
app.use('/api/menu', menuRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});