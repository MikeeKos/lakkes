import Lake from "../../../models/lake";
import { connectDatabase } from "../../../helpers/db-util";

async function handler(req, res) {
  const { method } = req;
  // find a way to read req.body
  // check what happens when is is passed to new Lake()

  //Establish connection to the database
  let client;
  try {
    client = await connectDatabase();
  } catch (error) {
    res.status(500).json({ responseData: error });
    return;
  }

  switch (method) {
    case "POST":
      //check validity

      try {
        const lake = new Lake(req.body);
        await lake.save();
        res.status(201).json({
          responseData: "successfully added the lake to database",
          data: req.body,
        });
      } catch (error) {
        res.status(400).json({ responseData: error });
        return;
      }

      res.status(201).json({ responseData: "successfully add data" });

      break;

    case "GET":
      //giving data to user
      res.status(201).json({ responseData: "successfully edited data" });
      break;

    default:
      res
        .status(400)
        .json({ responseData: "It was not either POST or GET request" });
      break;
  }
}

export default handler;
