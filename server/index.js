import express from "express";
import path from "path";
import multer from "multer";
import cors from "cors";
import fs from 'fs';
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Enable CORS so frontend can communicate with backend
app.use(cors());

// Define the directory for file storage
const storageDir = path.join(path.resolve(), 'public/assets');

// Ensure the 'public/assets' directory exists
if (!fs.existsSync(storageDir)) {
  fs.mkdirSync(storageDir, { recursive: true });
}

// Set storage destination and filename format using multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/assets'); // Save files in 'public/assets' folder
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Unique filename with extension
  },
});

// Initialize multer with storage settings
const upload = multer({ storage });

// Serve static files from 'public' directory (e.g., uploaded images)
app.use(express.static(path.resolve('public')));

// File upload route
app.post('/upload', upload.single('image'), (req, res) => {
 
if(!req.file){
    return res.status(400).json({message:"No file uploaded"});
}
  const imageUrl = `/assets/${req.file.filename}`; // Access URL for uploaded file
  res.json({ imageUrl });
});

// Start the server on port 4000
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
