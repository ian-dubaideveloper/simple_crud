const express = require("express");
const startServer = require("./lib/boot");

const router = require("./routes/route");

const app = express();
app.use(express.json());
app.use("/", router);
startServer(app);
