const express = require("express");
const { getSpecificProduct } = require("./server/products");

const app = express();
const cors = require("cors");
const port = 3001;

app.use(cors());
app.use(express.json());

app.get("/api/products/:searchterm", async (req, res) => {
  const name = req.params.searchterm;
  const products = await getSpecificProduct(name);
  res.json(products);
});

app.get("/message", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
