const express = require("express");
const app = express();
const connectDB = require("./DB/Connection");
connectDB();

const routes = require("./routes/api.routes");

app.set("view engine", "ejs");
app.use(express.json({ extended: false }));
app.use("/api", routes);

app.use(express.static("public"));

const port = process.env.Port || 3000;

app.listen(port, () => console.log(`Server listening at port ${port}`));
