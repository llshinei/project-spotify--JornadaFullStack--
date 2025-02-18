import { MongoClient } from 'mongodb';

const URI = "mongodb+srv://llshinei:2703.ROSE.gabriel@cluster0.yqr3s.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const db = client.db("projectSpotify");
// const songsColection = await db.collection("songs").find({}).toArray();
// const artistsColection = await db.collection("artists").find({}).toArray();

console.log(db);