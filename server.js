const express = require("express");
const app = express();
var bodyParser = require("body-parser");
const connectDB = require("./DB/Connection");
connectDB();

const routes = require("./routes/api.routes");
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/api", routes);

app.use(express.static("public"));

const port = process.env.Port || 3000;

app.listen(port, () => console.log(`Server listening at port ${port}`));
