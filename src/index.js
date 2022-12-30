const express = require("express");
const bodyParser = require("body-parser");
const { PORT } = require("./config/serverConfig");
const ApiRoutes = require("./router/index");
const db = require("./models/index");

const setupAndStartSever = async () => {
  //create the express object
  const app = express();

  // parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: false }));

  // parse application/json
  app.use(bodyParser.json());

  app.use("/api", ApiRoutes);

  app.listen(PORT, async () => {
    console.log(`Server started at PORT ${PORT}`);
    if (process.env.SYNC_DB) {
      db.sequelize.sync({ alter: true }); //This should be done only once whenever you make new association[new model]
    }
  });
};

setupAndStartSever();
