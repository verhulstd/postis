const { checkSchema } = require("express-validator");
const knex = require("../../db");
const validatePostUser = () =>
    checkSchema({
        firstname: {
            isLength: {
                options: { min: 2, max: undefined },
                errorMessage: "Firstname should be at least 2 characters"
            }
        },
        lastname: {
            isLength: {
                options: { min: 2, max: undefined },
                errorMessage: "lastname should be at least 2 characters"
            }
        },
        email: {
            isEmail: {
                errorMessage: 'Email should be valid',
            },
            custom: {
                options: value => {
                    return knex("users")
                        .where({ email: value })
                        .then(arr => {
                            if (arr.length === 1) {
                                return Promise.reject("This email is already registered");
                            }
                        });
                }
            }
        },
        password: {
            isLength: {
                errorMessage: 'Password should be at least 7 chars long',
                // Multiple options would be expressed as an array
                options: { min: 7 }
            }
        },
    });


module.exports = {
    validatePostUser
};
