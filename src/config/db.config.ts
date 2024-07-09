const { Sequelize } = require("sequelize-typescript");
const path = require("path");

console.log("Connecting to the database...");

const sequelize = new Sequelize({
  dialect: "postgres",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  models: [path.join(__dirname, "../models")],
});

// Authenticate sequelize instance
sequelize
  .authenticate()
  .then(() => {
    console.log("Successful Connection");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

module.exports = sequelize;
