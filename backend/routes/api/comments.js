/**
 * @route GET /api/comments
 * @group Comments - Operations about comments
 * @returns {Array.<Comment>} 200 - An array of comment objects
 * @returns {Error} 500 - Internal server error
 */

/**
 * @route GET /api/comments/:id
 * @group Comments - Operations about comments
 * @param {string} id.path.required - Comment ID
 * @returns {Comment.model} 200 - A comment object
 * @returns {Error} 404 - Comment not found
 * @returns {Error} 500 - Internal server error
 */

/**
 * @route POST /api/comments
 * @group Comments - Operations about comments
 * @param {Comment.model} comment.body.required - New comment data
 * @returns {Comment.model} 201 - The created comment object
 * @returns {Error} 400 - Bad request
 */
/**
 * Express router for comment-related API endpoints.
 */
const router = require("express").Router();

const mongoose = require("mongoose");
/**
 * Mongoose model for comments.
 */
const Comment = mongoose.model("Comment");

/**
 * Exports the router to be used in the main app.
 */
module.exports = router;
// Hey GitHub Copilot, please write the following routes for comments:
// 1. GET /api/comments - Get all comments
// 2. GET /api/comments/:id - Get a comment by ID
// 3. POST /api/comments - Create a new comment
// 4. PUT /api/comments/:id - Update a comment by ID
// 5. DELETE /api/comments/:id - Delete a comment by ID

/**
 * GET /api/comments
 * Retrieves all comments from the database.
 * @route GET /api/comments
 * @returns {Array} 200 - An array of comment objects
 * @returns {Error} 500 - Internal server error
 */
router.get("/", async (req, res) => {
  try {
    const comments = await Comment.find();
    res.json(comments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/**
 * GET /api/comments/:id
 * Retrieves a comment by its ID.
 * @route GET /api/comments/:id
 * @param {string} id.path.required - Comment ID
 * @returns {Object} 200 - Comment object
 * @returns {Error} 404 - Comment not found
 * @returns {Error} 500 - Internal server error
 */
router.get("/:id", async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);
    if (!comment) return res.status(404).json({ error: "Comment not found" });
    res.json(comment);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/**
 * POST /api/comments
 * Creates a new comment.
 * @route POST /api/comments
 * @param {Object} req.body.required - Comment data
 * @returns {Object} 201 - Created comment object
 * @returns {Error} 400 - Bad request
 */
router.post("/", async (req, res) => {
  try {
    const newComment = new Comment(req.body);
    const savedComment = await newComment.save();
    res.status(201).json(savedComment);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
