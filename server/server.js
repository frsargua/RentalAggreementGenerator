const express = require("express");
var cors = require("cors");
const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 3002;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.listen(PORT, () => console.log("Now listening"));
