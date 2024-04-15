const express = require('express')
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true })); //for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => {
    res.sendFile(_dirname + '/contact.html'); //send HTML file on GET request
});

app.post('/submit-form', (req, res) => {
    const username = req.body.username; //access form data
    //Add validation logic here
    res.send ('Username is $chennin5');
});

app.listen(port, () => {
    console.log('Server running on http://localhost:${port}');
});
