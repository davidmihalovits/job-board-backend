const Job = require("../models/Job");
const { Op } = require("sequelize");

exports.search = async (req, res) => {
    try {
        const jobs = await Job.findAll({
            where: {
                [Op.or]: {
                    title: { [Op.iLike]: "%" + req.body.search + "%" },
                    description: { [Op.iLike]: "%" + req.body.search + "%" },
                },
            },
        });

        return res.json(jobs);
    } catch (error) {
        console.log(error);
        return res.json({ status: "Could not search." });
    }
};
