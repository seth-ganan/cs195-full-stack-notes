// server.js
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors()); // allow browser requests during dev
app.use(express.json()); // parse JSON bodies

// health check (nice for debugging/deploys)
app.get("/api/health", (req, res) => {
  res.json({ ok: true, time: new Date().toISOString() });
});

app.get("/", (req, res) => {
  res.send(
    '<h1>Server is running ✅</h1><p>Try <a href="/api/hello">/api/hello</a></p>'
  );
});

// hello route (GET)
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from Express!" });
});

// query param example: /api/hello-name?name=Meredith
app.get("/api/hello-name", (req, res) => {
  const name = req.query.name || "friend";
  res.json({ message: `Hello, ${name}!` });
});

// GET /api/goodbye → { "message": "Goodbye!" }
app.get("/api/goodbye", (req, res) => {
  res.json({ message: "Goodbye!" });
});

// POST example (shows why express.json() matters)
app.post("/api/echo", (req, res) => {
  res.status(201).json({ youSent: req.body });
});

const PORT = 3001; // or 8080
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
