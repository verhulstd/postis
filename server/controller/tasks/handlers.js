const {
  getTasks,
  postTask,
  deleteTask,
  getTaskById,
  editTask,
  assignTask,
  getTasksByCampaignId
} = require("./queries");
const { errorCheck } = require('../helpers')

const handleGetTasksList = async (req, res) => {
  res.json(await getTasks());
};
const handlePostTask = async (req, res) => {
  if (!errorCheck(req, res)) {
    res.json(await postTask(req.body));
  }
};
const handleGetTasksByCampaignId = async (req, res) => {
  if (!errorCheck(req, res)) {
    res.json(await getTasksByCampaignId(parseInt(req.params.id)));
  }
};
const handleDeleteTask = async (req, res) => {
  if (!errorCheck(req, res)) {
    const tasks = await deleteTask(parseInt(req.params.id));
    res.json(tasks);
  }
};
const handleGetTaskByIdExtraFields = async (req, res) => {
  if (!errorCheck(req, res)) {
    res.json(await getTaskById(parseInt(req.params.id)));
  }
};
const handleEditTask = async (req, res) => {
  if (!errorCheck(req, res)) {
    const tasks = await editTask(parseInt(req.params.id), req.body);
    res.json(tasks);
  }
};

const handleAssignTask = async (req, res) => {
  if (!errorCheck(req, res)) {
    const tasks = await assignTask(parseInt(req.params.id), req.body.id);
    res.json(tasks);
  }
};

module.exports = {
  handleGetTasksList,
  handlePostTask,
  handleDeleteTask,
  handleEditTask,
  handleAssignTask,
  handleGetTasksByCampaignId,
  handleGetTaskByIdExtraFields
};
