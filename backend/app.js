const express = require("express")
const mongoose = require("mongoose")
const {UserModel} = require("./models/user")
const app = express();
const router=require("./routes/users");
const productrouter = require("./routes/products");
var cors = require('cors');
require("dotenv").config();


mongoose.connect(process.env.mongoURL)
.then(() => console.log('Connected!'));

app.use(express.json());
app.use(cors())
app.use("/user",router)
app.use("/products",productrouter)
app.listen(3000, ()=> console.log("server is running"))
