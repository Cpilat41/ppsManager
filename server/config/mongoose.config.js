const mongoose = require("mongoose");

const dbName = "ppsManager";

mongoose
  .connect(`mongodb://127.0.0.1/${dbName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    console.log(`Um, yes Hello- We have establisted a connection to the ${dbName}`)
  )
  .catch((err) =>
    console.log(
      `Something has gone terribly wrong connecting to ${dbName}`,
      err
    )
  );