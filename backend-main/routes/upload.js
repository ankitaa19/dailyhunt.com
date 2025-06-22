const express = require('express');
const multer = require('multer');
const path = require('path');
const neo4j = require('neo4j-driver');

const router = express.Router();

// Configure multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Set the upload directory
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Append timestamp to filename
    },
});

const upload = multer({ storage });

// Upload endpoint
router.post('/', upload.single('image'), async (req, res) => {
    const { description } = req.body;
    const imagePath = req.file.path;

    // Neo4j Driver Setup
    const driver = neo4j.driver(process.env.NEO4J_URI, neo4j.auth.basic(process.env.NEO4J_USERNAME, process.env.NEO4J_PASSWORD));
    const session = driver.session();

    try {
        // Create a node for the uploaded image in Neo4j
        const result = await session.run(
            'CREATE (i:Image {imagePath: $imagePath, description: $description, uploadedAt: $uploadedAt}) RETURN i',
            {
                imagePath,
                description,
                uploadedAt: new Date().toISOString(),
            }
        );

        res.status(201).json({
            message: 'Image uploaded successfully!',
            data: result.records[0].get('i').properties,
        });
    } catch (error) {
        console.error('Error uploading image:', error);
        res.status(500).json({ message: 'Failed to upload image. Please try again.' });
    } finally {
        await session.close();
        await driver.close(); // Close the driver when done to free up resources
    }
});

module.exports = router;
