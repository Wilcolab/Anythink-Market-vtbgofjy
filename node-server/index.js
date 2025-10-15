const express = require('express');
const app = express();
const PORT = 8001;

app.use(express.json());

// Initial tasks data
let tasks = [
  "Write a diary entry from the future",
  "Create a time machine from a cardboard box",
  "Plan a trip to the dinosaurs",
  "Draw a futuristic city",
  "List items to bring on a time-travel adventure"
];

// GET / - Returns "Hello World"
app.get('/', (req, res) => {
  res.send('Hello World');
});

// GET /tasks - Returns all tasks
app.get('/tasks', (req, res) => {
  res.json({ tasks: tasks });
});

// POST /tasks - Adds a new task
app.post('/tasks', (req, res) => {
  const { text } = req.body;
  if (text) {
    tasks.push(text);
    res.json({ message: 'Task added successfully' });
  } else {
    res.status(400).json({ error: 'Task text is required' });
  }
});

// Server listening
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
