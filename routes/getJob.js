const Job = require("../models/Job");

exports.getJob = async (req, res) => {
    try {
        const job = await Job.findOne({
            where: {
                id: req.params.id,
            },
        });

        return res.json(job);
    } catch (error) {
        console.log(error);
        return res.json({ status: "Could not get this job." });
    }
};
