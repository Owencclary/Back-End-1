
// activates the express server
const express = require('express')

// activates cors
const cors = require("cors");

// assigns the server to a variable called 'app'
const app = express()

// tells server to use json for sending and receiving javascript data on the backend
app.use(express.json())

// tells server to use cors so requests and responses can communicate on other ports
app.use(cors());

// makes a variable for the port
const port = 4000;

app.get("/api/users", (req, res) => { 
    let friends = ["Nitin", "Eric", "Jeddy", "Cameron", "Riley"];
    res.status(200).send(friends);
})

/* when the user types in /weather/:temperature at the end of the URL it sends the phrase of the temperature to the user
using the incoming data (temperature url) assigning it to req (request) then sends a response using res.send and setting
the satus of port 200 in the HTTP to the request? */
app.get("/weather/:temperature", (req, res) => {
    const phrase = `<h3>It was ${req.params.temperature} today</h3>`;
    res.status(200).send(phrase);
  });

// notifys the console what the port is running on 
app.listen(port, () => console.log(`Server is runnign on port ${port}`))