import multer from "multer";
import path from "path";
import fs from "fs";

// Resolve absolute path for the destination directory
const uploadDirectory = path.resolve('public', 'temp');

// Ensure the directory exists
if (!fs.existsSync(uploadDirectory)) {
  fs.mkdirSync(uploadDirectory, { recursive: true });
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDirectory);  // Use absolute path for destination
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Keep original file name
  }
});

export const upload = multer({
  storage,
});
