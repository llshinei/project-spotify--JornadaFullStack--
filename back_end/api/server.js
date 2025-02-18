// API (Application Programming Interface) is a set of rules and protocols that allows one software application to communicate with another.
// In this case, the API is the server.js file that allows the front end to communicate with the back end.
import express from 'express';
import cors from 'cors';
import { db } from './connect.js';
import path from 'path';

const app = express();
const PORT = 10032;
const __dirname = path.resolve();

app.use(cors());

app.get('/api/', (request, response) => {
    response.send('Hello World!');
});

app.get('/api/artists', async (request, response) => {
    response.send(await db.collection("artists").find({}).toArray());
});

app.get('/api/songs', async (request, response) => {
    response.send(await db.collection("songs").find({}).toArray());
});

app.use(express.static(path.join(__dirname, '../front_end/dist')));

app.get('*', async (request, response) => {
    response.sendFile(path.join(__dirname, '../front_end/dist/index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});