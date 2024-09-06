import express from "express";
import path from "path";
import fs from "fs";
import multer from "multer";

const app = express();
const __dirname = path.resolve();

// Set storage destination and filename format
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/assets'); // Where to save the uploaded files
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Append file extension
  },
});

const upload = multer({ storage });
app.use(express.static('public'));

// Endpoint to handle image uploads
app.post('/upload', upload.single('image'), (req, res) => {
  const imageUrl = `/assets/${req.file.filename}`;
  res.json({ imageUrl });
});

// Endpoint to get all images from the assets directory
app.get('/images', (req, res) => {
  const directoryPath = path.join(__dirname, 'public/assets');
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      return res.status(500).json({ message: "Unable to scan directory" });
    }
    const imageUrls = files.map(file => `/assets/${file}`);
    res.json({ images: imageUrls });
  });
});

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});

