// API (Application Programming Interface) is a set of rules and protocols that allows one software application to communicate with another.
// In this case, the API is the server.js file that allows the front end to communicate with the back end.
import express from 'express';
import cors from 'cors';
import { db } from './connect.js';

const app = express();
const PORT = 10032;

app.use(cors());

app.get('/', (request, response) => {
    response.send('Hello World!');
});

app.get('/artists', async (request, response) => {
    response.send(await db.collection("artists").find({}).toArray());
});

app.get('/songs', async (request, response) => {
    response.send(await db.collection("songs").find({}).toArray());
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});