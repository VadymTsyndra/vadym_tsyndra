const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const activityController = require('../controllers/activityController');

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

app.post('/my-activities', activityController.createActivities);
app.get('/my-activities', activityController.getActivities);
