const express = require('express');
const app = express();
const port = 3000;

const mongooes = require('mongoose');
const uri = 'mongodb+srv://xfilecom:milk1209@boilerplate.wjfi9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const client = mongooes.connect(uri, {
    useNewUrlParser:true, 
    useUnifiedTopology:true, 
}).then(() => {
    console.log('mongodb connected')
}).catch(err => console.error(err))

app.get('/', (req, res) => res.send('Hello world!'));


app.listen(port, () => console.log('hi'));