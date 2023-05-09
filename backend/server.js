const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");

//import routes
const authRoutes = require("./routes/auth");


const app = express();

const PORT = process.env.PORT || 8000;

//middleware

// app.use(cors());
if(process.env.NODE_ENV = "development"){
    app.use(cors({origin: `http://localhost:3000`}));
}
app.use(morgan('dev'));
app.use(bodyParser.json());

app.use("/api", authRoutes);

app.get("/", (req, res) => {
    res.send(`<h1>This is another mern authentication app </h1>`)
})


dotenv.config();

mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URL)
.then(console.log(".....MongoDB is now Connected......"))
.catch((err) => console.log(err));





app.listen(PORT, () => {
    console.log(`...Server is running on port: ${PORT} - "${process.env.NODE_ENV} mode " ..........!!!!`);
});