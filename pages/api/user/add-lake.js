// import { connectDatabase, insertDocument } from "../../helpers/db-util";

async function handler(req, res) {
  if (req.method === "POST") {
    console.log(req.body);
    res.status(201).json({ message: "Success" });

    // const userEmail = req.body.email;

    // if (!userEmail || !userEmail.includes("@")) {
    //   //422 user input was bad
    //   res.status(422).json({ message: "invalid email address" });
    //   return;
    // }

    // let client;

    // try {
    //   client = await connectDatabase();
    // } catch (error) {
    //   res.status(500).json({ message: "connecting to the database failed" });
    //   return;
    // }

    // try {
    //   await insertDocument(client, "newsletter", { email: userEmail });
    //   client.close();
    // } catch (error) {
    //   res.status(500).json({ message: "inserting data failed" });
    //   return;
    // }

    // res.status(201).json({ message: "Signed up!" });
  }
}

export default handler;
