const Activity = require('../models/activity');

async function getActivities() {
  return Activity.find();
}

async function createActivities(newActivities) {
  const activities = newActivities.map(newActivity => ({
    activity: newActivity.activity,
    type: newActivity.type,
    participants: newActivity.participants,
    price: newActivity.price,
    link: newActivity.link,
    key: newActivity.key,
    accessibility: newActivity.accessibility,
    timeAdded: newActivity.timeAdded
  }));

  return Activity.create(activities);
}

module.exports = {
  getActivities,
  createActivities
};
