const express = require('express');
const app = express();
const port = 80;

const trains = [
  {
    id: 1,
    name: 'Express 1',
    departureTime: new Date('2023-06-30T08:00:00'),
    arrivalTime: new Date('2023-06-30T12:00:00'),
    seatsAvailable: 50,
    price: 100,
  },
  {
    id: 2,
    name: 'Express 2',
    departureTime: new Date('2023-06-30T10:00:00'),
    arrivalTime: new Date('2023-06-30T14:00:00'),
    seatsAvailable: 20,
    price: 120,
  },

];


app.get('/trains', (req, res) => {
  const currentTime = new Date();
  const twelveHoursLater = new Date(currentTime.getTime() + 12 * 60 * 60 * 1000);

  const trainsInNext12Hours = trains.filter(
    (train) => train.departureTime >= currentTime && train.departureTime <= twelveHoursLater
  );
    var jo=trainsInNext12Hours-twelveHoursLater;
    if(jo>30||jo>1/2)
    {
        alert ('ignored');
    }
  const result = trainsInNext12Hours.map((train) => ({
    id: train.id,
    name: train.name,
    departureTime: train.departureTime,
    arrivalTime: train.arrivalTime,
    seatsAvailable: train.seatsAvailable,
    price: train.price,
  }));

  res.json(result);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});