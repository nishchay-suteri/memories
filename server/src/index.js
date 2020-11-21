const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const GLOBALS = require("./constants/globals");
const indexRouter = require("./routes/index");
const postsRouter = require("./routes/posts");

const app = express();

// Mongoose Warning Resolution
mongoose.set("useUnifiedTopology", true);
mongoose.set("useNewUrlParser", true);
mongoose.set("useCreateIndex", true);
mongoose.set("useFindAndModify", false);

// middlewares
app.use(cors({ optionsSuccessStatus: 200 }));
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use("/", indexRouter);
app.use("/posts", postsRouter);

mongoose.connect(GLOBALS.DB_URI, () => {
    app.listen(GLOBALS.SERVER_PORT, () =>
        console.log(`Server running on port ${GLOBALS.SERVER_PORT}`)
    );
});
const db = mongoose.connection;
db.on("error", (error) => {
    console.log(error.message);
});
