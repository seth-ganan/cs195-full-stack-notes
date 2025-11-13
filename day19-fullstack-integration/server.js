require("dotenv").config(); // Load .env file

const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((error) => console.error("❌ Error:", error));

// Import models from Book.js
const Book = require("./models/Book");

// Routes will go here...

// Root route - just to confirm server is running
app.get("/", (req, res) => {
  res.json({
    message: "Day19 API Server",
    status: "Running",
    endpoints: {
      books: "/api/books",
      sessions: "/api/sessions",
    },
  });
});

// POST /api/books -- this will Add a new book
app.post("/api/books", async (req, res) => {
  try {
    // Create new book from request body
    const newBook = new Book(req.body);

    // Save to database
    const savedBook = await newBook.save();

    // Send back the saved book
    res.status(201).json(savedBook);
  } catch (error) {
    // Handle validation errors
    res.status(400).json({ message: error.message });
  }
});

// Get all books -- GET /api/books
app.get("/api/books", async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get one Book -- GET /api/books/:id
app.get("/api/books/:id", async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);

    if (!book) {
      return res.status(404).json({
        message: "Book not found",
      });
    }
    res.json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Modify existing book -- PUT /api/books/:id
app.put("/api/books/:id", async (req, res) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(
      req.params.id, // Which book to update
      req.body, // New data
      {
        new: true, // Return updated version
        runValidators: true, // Check schema rules
      }
    );

    if (!updatedBook) {
      return res.status(404).json({
        message: "Book not found",
      });
    }

    res.json(updatedBook);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Remove a book -- DELETE /api/books/:id
app.delete("/api/books/:id", async (req, res) => {
  try {
    const deletedBook = await Book.findByIdAndDelete(req.params.id);

    if (!deletedBook) {
      return res.status(404).json({
        message: "Book not found",
      });
    }

    res.json({
      message: "Book deleted successfully",
      book: deletedBook,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Leave this at the bottom of your code:
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
