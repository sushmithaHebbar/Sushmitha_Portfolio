const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

const projectRoutes = require('./routes/projectRoutes'); // <-- Import your route handler!

const app = express();

// --- 1. Middleware ---
// CORS: Allows your React frontend (running on a different port) to access this backend API.
app.use(cors()); 
// Body Parser: Allows Express to read JSON data sent in requests.
app.use(express.json());

// --- 2. Database Connection ---
const DB_URI = process.env.MONGO_URI; 

if (!DB_URI) {
    console.error("FATAL ERROR: MONGO_URI is not defined in the .env file. Please check your setup.");
    // In a real application, you would exit the process here.
} else {
    mongoose.connect(DB_URI)
        .then(() => console.log('✅ MongoDB Atlas Connected Successfully!'))
        .catch(err => {
            console.error('❌ MongoDB Connection Error:', err.message);
            console.log('Please check your MONGO_URI, network access settings in Atlas, and ensure the database user credentials are correct.');
        });
}


// --- 3. Routes ---
// This line connects your imported 'projectRoutes' to the /api/data path.
// When the frontend requests http://localhost:5000/api/data, this route handler runs.
app.use('/api/data', projectRoutes);


// Simple root route for testing if the server is alive
app.get('/', (req, res) => {
    res.send('Portfolio Backend is alive and ready!');
});

// --- 4. Start Server ---
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
