const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

const port = 3000;

app.listen(port, () => console.log(`Server listening on port ${port}`));
