const usersRouter = require("express").Router();
const { handleGetUserList, handlePostUser, handleLogin } = require("./handlers");
const { validatePostUser } = require("./validations")

usersRouter.get("/", handleGetUserList);
usersRouter.post("/", validatePostUser(), handlePostUser);
usersRouter.post("/login", handleLogin);

module.exports = usersRouter;
