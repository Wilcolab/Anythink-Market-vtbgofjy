const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

module.exports = router;
// Hey GitHub Copilot, please write the following routes for comments:
// 1. GET /api/comments - Get all comments
// 2. GET /api/comments/:id - Get a comment by ID
// 3. POST /api/comments - Create a new comment
// 4. PUT /api/comments/:id - Update a comment by ID
// 5. DELETE /api/comments/:id - Delete a comment by ID

router.get("/", async (req, res) => {
  try {
    const comments = await Comment.find();
    res.json(comments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);
    if (!comment) return res.status(404).json({ error: "Comment not found" });
    res.json(comment);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});