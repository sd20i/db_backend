import { Sequelize } from "sequelize";

let database: any = process.env.DB_DATABASE;
let username: any = process.env.DB_USER;
let password: any = process.env.DB_PASSWORD;
let host: any = process.env.DB_HOST;
let dialect: any = process.env.DB_DIALECT;

const sequelize = new Sequelize(database, username, password, {
  host: host,
  dialect: dialect,
  logging: false, // remove this line to get logging from sequelize
});

const testingConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

export { testingConnection, sequelize };
