const express = require('express');
const bodyParser = require('body-parser');
const {MongoClient} = require('mongodb');
const app = express();
const port = 4000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname));

const mongoURL = 'mongodb://localhost:27017';
const dbName = 'clients';

app.post('/index', async(req, res) => {
    const { username, password } = req.body;
    try{
        const client = new MongoClient(mongoURL, {useUnifiedTopology: true});
        await client.connect();

        const db = client.db(dbName);
        const usersCollection = db.collection('users');

        const user = await usersCollection.findOne({username, password});

        if (user){
            res.send('Login Successful');
        } else{
            res.send('Login failed');
        }

        client.close();

    } catch(error){
        console.error('MongoDB error:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:4000`);
});
