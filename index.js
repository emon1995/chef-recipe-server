const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
