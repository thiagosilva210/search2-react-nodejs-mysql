const pool = require("./database");

async function getSpecificProduct(searchterm) {
  try {
    const [rows] = await pool.query(
      "SELECT * FROM products WHERE name LIKE ?",
      ["%" + searchterm + "%"]
    );
    console.log(rows);
    return rows;
  } catch (error) {
    console.error(error);
  }
}

module.exports = { getSpecificProduct };
