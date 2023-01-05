const joi = require("joi");

const validateSchema = async (inputs, schema) => {
    try {
      let { error, _ } = schema.validate(inputs);
      if (error) throw error.details ? error.details[0].message.replace(/['"]+/g, "") : "";
      else return false;
    } catch (error) {
      throw error;
    }
  };

module.exports = {
  validateData: async (req, property) => {
    let schema = joi.object().keys({
      email: joi.string().trim().lowercase().required(),
      phone: joi
        .string()
        .regex(/^[0-9]+$/)
        .min(5)
        .required(),
      usage: joi.string().required(),
      sideEffects: joi.string().required(),
      service: joi.number().required(),
      rating: joi.number().required(),
      refer: joi.string().required(),
      comment: joi.string().required(),
    });
    return await validateSchema(req[property], schema);

  },
};
