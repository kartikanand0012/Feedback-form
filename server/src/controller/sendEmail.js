const nodemailer = require("nodemailer");

const Email = (options) => {
  let transpoter = nodemailer.createTransport({
    service: "gmail", //i use outlook
    auth: {
      user: process.env.USER, // email
      pass: process.env.PASSWORD, //password
    },
  });
  transpoter.sendMail(options, (err, info) => {
    if (err) {
      console.log(err);
      return;
    }
  });
};

// send email
const EmailSender = ({
  email,
  phone,
  usage,
  sideEffects,
  service,
  rating,
  refer,
  comment,
}) => {
  const options = {
    from: `${email}`,
    to: process.env.USER,
    subject: "Feedback Form Details",
    html: `
        <div style="width: 100%; background-color: #f3f9ff; padding: 5rem 0">
        <div style="max-width: 700px; background-color: white; margin: 0 auto">
          <div style="width: 100%; background-color: #00efbc; padding: 20px 0">
          </div>
          <div style="width: 100%; gap: 10px; padding: 30px 0; display: grid">
            <p style="font-weight: 800; font-size: 1.2rem; padding: 0 30px">
              Feedback form
            </p>
            <div style="font-size: .8rem; margin: 0 30px">
              <p>Email: <b>${email}</b></p>
              <p>Phone: <b>${phone}</b></p>
              <p>Do you use traya products regularly?<b>${usage}</b></p>
              <p>Did you have any side affects ?<b>${sideEffects}</b></p>
              <p>How do you like the service from you Hair coach?: <b>${service}</b></p>
              <p>Rate traya products: <b>${rating}</b></p>
              <p>Would you refer traya to any one?<b>${refer}</b></p>
              <p>Comment: <i>${comment}</i></p>
            </div>
          </div>
        </div>
      </div>
        `,
  };
  console.log("RUNNING");

  Email(options);
};

module.exports = EmailSender;
