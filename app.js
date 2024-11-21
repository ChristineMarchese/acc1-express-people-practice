const express = require('express');
const app = express();
const peopleController = require('./controllers/people');

app.use(express.json());

app.get("/", (req, res) => {
      //console.log(req)
      res.send('Hello People')
});

app.use("/people", peopleController);





module.exports = app;