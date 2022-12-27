const express = require("express");
const bodyParser = require("body-parser");
const { PORT } = require("./config/serverConfig");

const setupAndStartSever = async () => {
  //create the express object
  const app = express();

  // parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: false }));

  // parse application/json
  app.use(bodyParser.json());

  app.listen(PORT, () => {
    console.log(`Server started at PORT ${PORT}`);
  });
};

setupAndStartSever();
