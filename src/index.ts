import express from 'express';


const app = express();

app.get('/', (req, res) => {
    res.end('HELLO WORLD');
});

app.listen(3000, () => {
    console.log('APP STARTED');
})

