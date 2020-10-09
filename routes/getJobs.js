const Job = require("../models/Job");

exports.getJobs = async (req, res) => {
    try {
        const jobs = await Job.findAll({
            order: [["createdAt", "DESC"]],
        });

        return res.json(jobs);
    } catch (error) {
        console.log(error);
        return res.json({ status: "Could not get jobs." });
    }
};
