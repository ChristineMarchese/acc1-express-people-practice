const app = require('./app');
require("dotenv").config()

const PORT = process.env.PORT;

app.listen("3000", () => {
      console.log(`I'm listening at PORT ${PORT}`)
});

