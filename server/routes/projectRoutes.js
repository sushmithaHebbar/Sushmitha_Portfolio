const express = require('express');
const router = express.Router();
const PortfolioData = require('../models/portfoliodata'); // <-- Fixed casing to match actual file name

// GET /api/data - Fetches all portfolio content (projects and certifications)
router.get('/', async (req, res) => {
    try {
        // Find the single main document containing all portfolio data
        // We look for the document with uniqueId: 'main-data' as defined in the model
        const data = await PortfolioData.findOne({ uniqueId: 'main-data' });

        if (!data) {
            // If no document exists, return an empty structure
            return res.json({ projects: [], certifications: [] });
        }

        // Return the projects and certifications arrays to the frontend
        res.json({
            projects: data.projects,
            certifications: data.certifications
        });

    } catch (err) {
        // Log the error for debugging and send a 500 status response
        console.error('Error fetching portfolio data:', err);
        res.status(500).json({ message: 'Server error while retrieving portfolio data.' });
    }
});

// NOTE: You can add POST/PUT routes here later to update your data if you build an admin panel!

module.exports = router;
