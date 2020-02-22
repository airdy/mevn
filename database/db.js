const Sequelize = require("sequelize");
const db = {
    jwt: 'dev-jwt'
};
const sequelize = new Sequelize("mevn", "admin", "master31323", {
    host: "database-1.cmxnohksybwi.eu-central-1.rds.amazonaws.com:3306",
    dialect: 'mysql',
    operatorsAliases: false,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
