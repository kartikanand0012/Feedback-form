const Feedback = require("../../models/feedback");
const validation = require("../validations");
const EmailSender = require("./sendEmail");

module.exports = {
  feedback: async (req, res) => {
    try {
      const {
        email,
        phone,
        usage,
        sideEffects,
        service,
        rating,
        refer,
        comment,
      } = req.body;

      await validation.admin.validateData(req, "body");
      
      EmailSender({
        email,
        phone,
        usage,
        sideEffects,
        service,
        rating,
        refer,
        comment,
      });
      const newFeedback = new Feedback({
        email,
        phone,
        usage,
        sideEffects,
        service,
        rating,
        refer,
        comment,
      });

      await newFeedback.save();
      res.json({ msg: "Feedback submitted" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ msg: "Something went wrong" });
    }
  },
};
