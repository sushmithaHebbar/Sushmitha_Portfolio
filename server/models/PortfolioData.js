const mongoose = require('mongoose');

// Schema for a single certification entry
const CertificationSchema = new mongoose.Schema({
    title: { type: String, required: true },
    issuer: { type: String, required: true },
    link: { type: String, required: true },
    date: { type: String, required: true },
}, { _id: false }); // No individual IDs needed for sub-documents

// Schema for a single project entry
const ProjectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    techStack: [String],
    github: String,
}, { _id: false });

// Main Portfolio Data Schema
const PortfolioDataSchema = new mongoose.Schema({
    // Only one document should exist for this model, storing all portfolio content
    uniqueId: { type: String, required: true, unique: true, default: 'main-data' },
    
    // Arrays to store the collections of data
    projects: [ProjectSchema],
    certifications: [CertificationSchema],
});

module.exports = mongoose.model('PortfolioData', PortfolioDataSchema, 'portfolio_data'); 
// The last argument ensures the collection name is 'portfolio_data'
