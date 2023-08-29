const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

// mongodb connection
const mongoURI = "mongodb://localhost:27017/mydb";

mongoose.connect(mongoURI, {
        useNewUrlParser: true,
})
.then (() => {
        console.log("Connected to database");
})
.catch((e) => console.log("e"));

// importing Schema
require("./imageDetails");
const Images = mongoose.model("ImageDetails");

app.get("/", async(req, res) => {
        res.send("Success!")
}) 

app.listen(5000, () => {
        console.log("Server is running");
});

///////////////////////////
const multer  = require('multer')

const storage = multer.diskStorage({
        destination: function (req, file, cb) {
          cb(null, '../src/images');
        },
        filename: function (req, file, cb) {
          const uniqueSuffix = Date.now();
          cb(null, uniqueSuffix + file.originalname);
        }
      })
      
      const upload = multer({ storage: storage })

app.post("/upload-image", upload.single("image"), async(req, res) => {
        console.log(req.body);
        const imageName = eq.file.filename;

        try {
            Images.find({}).then((data) => {
                    res.send({status: "ok" , data: data});
            })
        } catch (error) {
                    res.json({status: error});
        }
}); 