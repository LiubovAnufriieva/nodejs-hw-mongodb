import Joi from 'joi';

export const updateContactSchema = Joi.object({
  name: Joi.string().min(3).max(20).messages({
    'string.base': 'Name should be a string',
    'string.min': 'Name should have at least {#limit} characters',
    'string.max': 'Name should have at most {#limit} characters',
  }),
  phoneNumber: Joi.string().min(3).max(20).messages({
    'string.base': 'phoneNumber should be a string',
    'string.min': 'phoneNumber should have at least {#limit} characters',
    'string.max': 'phoneNumber should have at most {#limit} characters',
  }),
  email: Joi.string().email().messages({
    'string.base': 'Name should be a string!',
  }),
  isFavourite: Joi.boolean(),
  contactType: Joi.string().valid('work', 'home', 'personal'),
});
