const express = require("express");
const compression = require("compression");
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./config/db");
const { getJobs } = require("./routes/getJobs");
const { getJob } = require("./routes/getJob");
const { addJob } = require("./routes/addJob");
const { submit } = require("./routes/submit");
const { payment } = require("./routes/payment");

const app = express();
app.use(compression());
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
db.authenticate().then(() => console.log("Postgres database connected."));
db.sync();

app.get("/getJobs", getJobs);
app.get("/getJob/:id", getJob);
app.post("/addJob", addJob);
app.post("/submit", submit);
app.post("/create-payment-intent", payment);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}.`));
