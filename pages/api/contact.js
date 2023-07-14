import Lake from "../../models/lake";

async function handler(req, res) {
  const { method } = req;

  //connect to database

  switch (method) {
    case "POST":

      //check validity

      try {

        // const lake = await Lake.create(req.body);

        console.log(req.body);
        res.status(201).json({ message: "succesfully reached api" });
      } catch (error) {
        res.status(400).json({ message: "Could not create Lake (API)" })
      }
      break;

    case "GET":

      //giving data to user

      break;
      
    default:
      res
        .status(400)
        .json({ message: "It was not either POST or GET request" });
      break;
  }
}

export default handler;
