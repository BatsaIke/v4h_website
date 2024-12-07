const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 4000;

// Serve static files from the Vite build output
app.use(express.static(path.join(__dirname, "dist/client")));

// Fallback route to serve `index.html` for SPA
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/client/index.html"));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
