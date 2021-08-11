const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const connectDB = require("./config/db");
const videoRoutes = require("./routes/api/videoRoutes");
const commentsRoutes = require("./routes/api/commentsRoutes");


// initialize app config
const app = express();
connectDB();


// Init Middleware
app.use(express.json({ extended: false }));

// routes
app.use("/api/videos", videoRoutes);
app.use("/api/comments", commentsRoutes);

// Static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`app is running on ${PORT}`));