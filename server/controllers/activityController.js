const activityService = require('../services/activityService');

async function getActivities(req, res) {
  try {
    const activities = await activityService.getActivities();

    res.status(200).json(activities);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function createActivities(req, res) {
  try {
    const newActivities = req.body;

    const savedActivities = await activityService.createActivities(newActivities);

    res.status(201).json(savedActivities);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  getActivities,
  createActivities
};
