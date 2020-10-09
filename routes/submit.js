const nodemailer = require("nodemailer");
require("dotenv").config();

exports.submit = async (req, res) => {
    const htmlEmail = `
        <h1>Hello!</h1>
        <p>Someone applied to ${req.body.company} as a ${req.body.title}.</p>
		<p>Check their resume here: ${req.body.resumeUrl}</p>
		`;

    const mailOptions = {
        to: req.body.email,
        from: "RemoteDev <remotedev@email.com>",
        subject: "Applicant from RemoteDev",
        html: htmlEmail,
    };

    const transporter = nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD,
        },
    });

    transporter.sendMail(mailOptions, (err, data) => {
        if (err) {
            res.json({
                status: "Application could not be sent.",
            });
            console.log(err);
        } else {
            res.json({
                status: "Application sent.",
            });
        }
    });
};
