/*const { Sequelize } = require("sequelize");
require("dotenv").config();

const dev = `postgresql://${process.env.PG_USER}:${process.env.PG_PASSWORD}@${process.env.PG_HOST}:${process.env.PG_PORT}/${process.env.PG_DATABASE}`;

const prod = process.env.DATABASE_URL; // heroku Postgres addon

module.exports = new Client(
    process.env.NODE_ENV === "production" ? prod : dev,
    { logging: false }
);*/

const { Client } = require("pg");

const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false,
    },
});

client.connect();

client.query(
    "SELECT table_schema,table_name FROM information_schema.tables;",
    (err, res) => {
        if (err) throw err;
        for (let row of res.rows) {
            console.log(JSON.stringify(row));
        }
        client.end();
    }
);
