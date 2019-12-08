const Joi = require('@hapi/joi');

exports.userShcema = Joi.object().keys({
  password: Joi.string()
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/,
    )
    .required(),
  username: Joi.string()
    .regex(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]/)
    .required(),
});

exports.companySchema = Joi.object().keys({
  companyId: Joi.string().required(),
  company: Joi.string().required(),
  description: Joi.string().allow(''),
  anywhere: Joi.object().keys({
    permission: Joi.boolean().required(),
    rule: Joi.string().allow(''),
  }),
  anytime: Joi.object().keys({
    permission: Joi.boolean().required(),
    rule: Joi.string().allow(''),
  }),
  homepage: Joi.string().allow(''),
  apply: Joi.string().allow(''),
  location: Joi.string().allow(''),
  logo: Joi.string().allow(''),
});
