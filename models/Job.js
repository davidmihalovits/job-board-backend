const { DataTypes } = require("sequelize");
const db = require("../config/db");

const Job = db.define("job", {
    title: {
        type: DataTypes.STRING,
    },
    type: {
        type: DataTypes.STRING,
    },
    salary: {
        type: DataTypes.STRING,
    },
    location: {
        type: DataTypes.STRING,
    },
    description: {
        type: DataTypes.TEXT,
    },
    company: {
        type: DataTypes.STRING,
    },
    website: {
        type: DataTypes.STRING,
    },
    logo: {
        type: DataTypes.STRING,
    },
    about: {
        type: DataTypes.TEXT,
    },
    email: {
        type: DataTypes.STRING,
    },
});

module.exports = Job;
