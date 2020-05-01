const { getUsers, editUser, addUser, loginUser } = require("./queries");
const { errorCheck } = require('../helpers')

const handleGetUserList = async (req, res) => {
  res.json(await getUsers());
};
const handleEditUser = async (req, res) => {
  const users = await editUser(parseInt(req.params.id), req.body);
  res.json(users);
};

const handlePostUser = async (req, res) => {
  if (!errorCheck(req, res)) {
    res.json(await addUser(req.body))
  }
}

const handleLogin = async (req, res) => {
  //if (!errorCheck(req, res)) {
  res.json(await loginUser(req.body))
  //}
}

module.exports = {
  handleGetUserList,
  handleEditUser,
  handlePostUser,
  handleLogin
};
