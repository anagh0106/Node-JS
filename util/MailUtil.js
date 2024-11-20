const mailer = require("nodemailer")
const path = require("path")

const sendMail = async (to, subject, text) => { // here sendMail is a Transporter
    const transport = mailer.createTransport({
        service: "gmail",
        auth: {
            user: "anagh0106@gmail.com",
            pass: "tsnceegwtmlculgt"
        }
    })

    const mailOptions = {
        from: "anagh0106@gmail.com",
        to: to,
        subject: subject,
        html: `<h1>${text}</h1>`,
        attachment: [
            {
                filename: "its-friday-dancing.gif",
                path: path.join(__dirname, "./its-friday-dancing.gif")
            }
        ]
    };

    try {
        const mailRes = await transport.sendMail(mailOptions);
        console.log("Mail Sent Successfully : ", mailRes)
        return mailRes

    } catch (error) {
        console.error('Error sending mail: ', error);
        throw err;
    }
}

module.exports = {
    sendMail
}
