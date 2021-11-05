import { MongoClient } from 'mongodb';

const handler = async (req, res) => {
  try {
    if (req.method === 'POST') {
      const data = req.body;
      const client = await MongoClient.connect(process.env.DB_URI);
      const db = client.db();
      const meetupsCollection = db.collection('meetups');
      const result = await meetupsCollection.insertOne(data);
      console.log(result);
      client.close();

      res.status(201).json({ message: 'Meetup inserted!' });
    }
  } catch (err) {
    res.status(400).json({ error: err, errorMessage: err.message });
  }
};

export default handler;
