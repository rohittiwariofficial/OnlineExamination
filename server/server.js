const express = require("express");
const app = express();
const PORT = 8000;
const router = require("./router");

app.use("/api",router);

app.listen(PORT, () => {
  console.log(`server is running http://localhost:${PORT}`);
});
