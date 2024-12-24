const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// In-memory array to store menu items (replace with database in production)
let menuItems = [];

// API Endpoint to Add Menu Item
app.post('/api/menu', (req, res) => {
  const { name, description, price, category, imageUrl } = req.body;

  // Validate input data
  if (!name || !description || !price || !category || !imageUrl) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  // Create a new menu item object
  const newMenuItem = {
    id: menuItems.length + 1, // Auto-increment the ID
    name,
    description,
    price,
    category,
    imageUrl,
  };

  // Add the new item to the in-memory array (In production, save this in a database)
  menuItems.push(newMenuItem);

  // Send the newly added item as a response
  res.status(201).json(newMenuItem);
});

// API Endpoint to Get All Menu Items
app.get('/api/menu', (req, res) => {
  // If there are no menu items, return a message
  if (menuItems.length === 0) {
    return res.status(404).json({ message: 'No menu items found' });
  }

  // Send the list of menu items as the response
  res.status(200).json(menuItems);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
