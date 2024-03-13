require("dotenv").config({ path: "./.env" });
const express = require("express");
const app = express();
// console>log("hello")

//dbconnection 
require("./models/dbconfig").dbconnection()

app.listen(process.env.PORT, () => {
    console.log(`The Server is running on port ${process.env.PORT}`);
});