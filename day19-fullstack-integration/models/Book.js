const mongoose = require("mongoose");

// Define the schema (blueprint)
const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true, // Can't create book without title
      trim: true, // Removes whitespace
    },
    author: {
      type: String,
      required: true,
      trim: true,
    },
    year: {
      type: Number,
      min: 1000, // Validation rules
      max: 2100,
    },
    genre: {
      type: String,
      enum: ["Fiction", "Non-Fiction", "Mystery", "Sci-Fi", "Fantasy"],
      default: "Fiction",
    },
    rating: {
      type: Number,
      min: 0,
      max: 5,
      default: 0,
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt
  }
);

// Create the model (factory)
const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
