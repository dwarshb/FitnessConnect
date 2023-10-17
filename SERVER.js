const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port= 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname));

app.post('/login', (req, res) => {
    const{username, password}=req.body;
    if(username==='yourUsername' && password === 'yourPassword'){
        res.send('Login Successful');
    } else{
        res.send('Login failed');
    }
});

app.listen(port, () => {
    console.log('Server started on http://localhost:3000');
});
