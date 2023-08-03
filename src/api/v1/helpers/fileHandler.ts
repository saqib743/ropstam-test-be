import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    console.log(file);
    const name =
      new Date().toISOString().replace(/:/g, "-") + file.originalname;
    // req["fileNames"]
    if (req.body.fileUrls) {
      req.body.fileUrls.push(name);
    } else {
      req.body.fileUrls = [];
      req.body.fileUrls.push(name);
    }
    cb(null, name);
  },
});

const fileFilter = (req: any, file: any, cb: any) => {
  if (
    file.mimetype === "application/pdf" ||
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/png" ||
    file.mimetype === "text/csv" ||
    file.mimetype === "application/msword" ||
    file.mimetype ===
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ||
    file.mimetype === "application/vnd.ms-excel" ||
    file.mimetype ===
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" ||
    file.mimetype === "application/octet-stream"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 8000000,
  },
  fileFilter: fileFilter,
});

export { upload };
