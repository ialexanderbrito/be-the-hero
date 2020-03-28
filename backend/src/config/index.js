const dotnev = require("dotnev");
dotnev.config({ patch: "src/config/.env" });

module.exports = {
  port: process.env.PORT,
  dbhost: process.env.POSTGRES_DBHOST,
  dbname: process.env.POSTGRES_DBNAME,
  dbport: process.env.POSTGRES_DBPORT,
  dbuser: process.env.POSTGRES_DBUSER,
  dbpwd: process.env.POSTGRES_PASSWORD
};
