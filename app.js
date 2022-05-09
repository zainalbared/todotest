const express = require("express");
const cookieParser = require("cookie-parser");
const sequelize = require("./util/db");
const session = require("express-session");

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(
  require("cors")({
    credentials: true,
 
    origin: "*",
  })
);
app.use(
  session({
    cookie: { maxAge: 1000 * 60 * 60 * 24 * 90 },
    secret: "thisISnkjdfnjdnjdnkfjdnvjdvnjdkvndfvjvfvnvnfdvkdfnvfvn",
    resave: false,
    saveUninitialized: false,
  })
);



app.use("/addData", require("./router/addData"));

app.use("/login", require("./router/login"));

app.use("/task", require("./router/handleTask"));




// const account = require("./models/account");
// const toDo = require("./models/toDo");
// const User = require("./models/user");

module.exports = app;


