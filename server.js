const express = require('express');
const connectDB = require('./config/mongoose'); // Import the connectDB function
const userRoutes = require('./routes/userRoutes'); // Import user routes
const thoughtRoutes = require('./routes/thoughtRoutes'); // Import thought routes

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

// Middleware for parsing JSON and urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/users', userRoutes); // Use user routes
app.use('/api/thoughts', thoughtRoutes); // Use thought routes

// A simple route for the root path to test if the server is running
app.get('/', (req, res) => {
  res.send('The API is running...');
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({
      success: false,
      message: 'An unexpected error occurred!',
    });
  });
  
// Listen on the specified PORT
app.listen(PORT, () => console.log(`🌍 Server running on port ${PORT}`));

