const express = require('express')
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true })); //for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/contact.html'); //send HTML file on GET request
});

// Route to handle form submissions for POST request
app.post('/submit-form', (req, res) => {
        // Access form data from request body
        const formData = req.body;

    //Form Validation is handled by contact.js
    
    // Send response with form data
    res.json(formData);
});

// Start the server
app.listen(port, () => {
    console.log('Server running on http://localhost:${port}');
});
