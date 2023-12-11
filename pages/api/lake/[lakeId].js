import { connectDatabase } from "../../../helpers/db-util";
import Lake from "../../../models/Lake";

let cachedDb = null;

export const connectDb = async () => {
  if (cachedDb) {
    return Promise.resolve(cachedDb);
  }

  try {
    const db = await connectDatabase();
    cachedDb = db;
    return cachedDb;
  } catch (error) {
    throw new Error('Failed to connect to database');
  }
};

export const dbMiddleware = (handler) => async (req, res) => {
  try {
    await connectDb();
    return await handler(req, res);
  } catch (error) {
    return res.status(503).json({ message: "Failed to connect to server" });
  }
};

const fetchData = async (req, res) => {
  const {
    query: { lakeId },
    method,
  } = req;

  switch (method) {
    case "GET":
      try {
        const lake = await Lake.findById(lakeId);
        if (!lake) {
          return res.status(400).json({ message: "Failed to find lake" });
        }

        return res.status(200).json({ message: "Success", data: lake });
      } catch (error) {
        return res.status(500).json({ message: "Could not find lake" });
      }

    default:
      return res.status(405).json({ message: "Method not allowed" });
  }
};

const handler = (req, res) => {
  return fetchData(req, res);
};

export default dbMiddleware(handler);
