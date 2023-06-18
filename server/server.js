const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Activity = require('./activity');

const app = express();
app.use(express.json()); 
app.use(cors());

async function start() {
  try {
    await mongoose.connect(
      'mongodb+srv://vadymtsyndra:vadymtsyndra123@cluster0.blkukfp.mongodb.net/cards-ideas?retryWrites=true&w=majority',
    )

    app.listen(3001, () => console.log(`Server started on port: ${3001}`));
  } catch(error) {
    console.log(error.message);
  }
}

start()

app.post('/my-activities', async (req, res) => {
  try {
    const newActivities = req.body;

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

    const savedActivities = await Activity.create(activities);

    res.status(201).json(savedActivities);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


app.get('/my-activities', async (req, res) => {
  try {
    const activities = await Activity.find();

    res.status(200).json(activities);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

