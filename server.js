 
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware to parse URL-encoded bodies (for form submissions)
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Route to handle form submissions
app.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    // Log the received data
    console.log(`Email: ${email}, Password: ${password}`);

    // Here, you can save the data to a database or process it further
    // For this example, we'll just send a response back to the client
    res.send('Login successful!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
