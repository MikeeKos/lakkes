import { MongoClient } from "mongodb";

export async function connectDatabase() {
  const client = await MongoClient.connect(process.env.DB_CONNECTION_LINK);

  return client;
}

export async function insertDocument(client, collection, document) {
  const db = client.db("my-site");
  const result = await db.collection(collection).insertOne(document);
  return result;
}

export async function getAllDocuments(client, collection, sort) {
  const db = client.db("my-site");

  const documents = await db.collection(collection).find().sort(sort).toArray();

  return documents;
}
