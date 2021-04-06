/*const { Sequelize } = require("sequelize");
require("dotenv").config();

const dev = `postgresql://${process.env.PG_USER}:${process.env.PG_PASSWORD}@${process.env.PG_HOST}:${process.env.PG_PORT}/${process.env.PG_DATABASE}`;

const prod = process.env.DATABASE_URL; // heroku Postgres addon

module.exports = new Sequelize(
    process.env.NODE_ENV === "production" ? prod : dev,
    { logging: false }
);*/

const { Client } = require("pg");

module.exports = new Client({
    connectionString:
        "postgres://bdkuursokprwmp:f762260806a671162a696d16e048ad43f55ae033479710f948c32739114a137b@ec2-3-233-43-103.compute-1.amazonaws.com:5432/d8tcsd3lq5ihpb",
    ssl: {
        rejectUnauthorized: false,
    },
});
