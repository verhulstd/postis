const knex = require("../../db");
const { hashPassword } = require("../helpers")
const { compare } = require('bcrypt')
const jwt = require('jsonwebtoken');
const getUsers = async () =>
  await knex
    .select("*")
    .from("users")
    .orderBy("created", "desc");

const addUser = async ({ firstname, lastname, email, password }) =>
  await knex("users")
    .insert({
      firstname,
      lastname,
      email,
      password: await hashPassword(password)
    })
    .returning(["firstname", "lastname", "email", "id"]);

const loginUser = async ({ email, password }) => {
  const user = await knex
    .select("*")
    .from("users")
    .where({ email }).first();
  const isPasswordCorrect = await compare(password, user.password);
  if (isPasswordCorrect) {
    const { password, ...userData } = user;
    const token = jwt.sign({ userData }, 'secretKey');
    return { authorization: token }
  } else {
    return {
      errors: [
        {
          msg: "Wrong credentials",
          param: "",
          location: "body"
        }
      ]
    }
  }
}


module.exports = {
  getUsers,
  addUser,
  loginUser
};
