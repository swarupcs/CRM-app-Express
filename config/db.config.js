require('dotenv').config();

const mongoDbUri = process.env.MONGODB_URI;
const dbName = "crmapp-db";
module.exports = { mongoDbUri, dbName };