const express = require('express');
const app = express();
const peopleController = require('./controllers/people');

app.use(express.json());

app.get("/", (req, res) => {
      //console.log(req)
      res.send('Hello People')
});

app.use("/people", peopleController);


app.get("*", (req, res) => {
     res.status(404).send("The request you are looking for does not exist")
})


module.exports = app;