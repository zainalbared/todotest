const sequelize = require("./util/db");
const app = require("./app");
require("dotenv").config();
const port = process.env.PORT ;
const run = async () => {
    try {
      await sequelize.authenticate();
      console.log("Connection has been established successfully.");
      sequelize
    // .sync({ alter: true })
        .sync()
        .then((result) => {
          app.listen(port, () => console.log(`Server is up at port: ${port}`));
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
  };
  run();