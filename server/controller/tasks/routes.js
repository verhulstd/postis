const tasksRouter = require("express").Router();
const { checkToken } = require('../helpers')
const {
  handleGetTasksList,
  handlePostTask,
  handleDeleteTask,
  //handleGetTaskById,
  handleEditTask,
  handleAssignTask,
  handleGetTasksByCampaignId,
  handleGetTaskByIdExtraFields
  //  handleGetSpecificTask, handleGetUserTask, handlePostTask, handleDeleteTask, handleUpdateTask
} = require("./handlers");

const {
  validateTaskByCampaignId,
  validateTaskById,
  validatePostTask,
  validateDeleteTask,
  validateEditTask,
  validateAssignTask
} = require("./validations");

tasksRouter.get("/", checkToken, handleGetTasksList);
tasksRouter.get(
  "/fromcampaign/:id",
  validateTaskByCampaignId(),
  handleGetTasksByCampaignId
);
tasksRouter.get("/:id", validateTaskById(), handleGetTaskByIdExtraFields);
tasksRouter.post("/", validatePostTask(), handlePostTask);
tasksRouter.delete("/:id", validateDeleteTask(), handleDeleteTask);
tasksRouter.put("/:id", validateEditTask(), handleEditTask);
tasksRouter.put("/:id/assign", validateAssignTask(), handleAssignTask);

module.exports = tasksRouter;

//to do:
