const Job = require("../models/Job");

exports.addJob = async (req, res) => {
    try {
        await Job.create({
            title: req.body.title,
            type: req.body.type,
            salary: req.body.salary,
            location: req.body.location,
            description: req.body.description,
            company: req.body.company,
            website: req.body.website,
            logo: req.body.logo,
            about: req.body.about,
            email: req.body.email,
        });

        return res.json({ status: "Job posted." });
    } catch (error) {
        console.log(error);
        return res.json({ status: "Could not add job." });
    }
};
