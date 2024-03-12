require("dotenv").config({path:"./.env"});
const express = require("express");
const app = express();
const PORT = 8080;


app.listen(PORT, () => {
    console.log('The server is running on port ${process.env.PORT}');
});