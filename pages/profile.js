import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { authOptions } from "./api/auth/[...nextauth]";
import Profile from "../components/profile/profile";
import { connectDatabase } from "../helpers/db-util";
import mongoose from "mongoose";
import Lake from "../models/Lake";

function ProfilePage(props) {
  const { data: session, status } = useSession();
  console.log(session);
  console.log(status);

  console.log("___SERVER SIDE SESSION FROM GETSERVERSIDEPROPS___");
  console.log(props.sessionObject);

  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/auth");
    }
  }, [router, status]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "authenticated") {
    return (
      <div>
        <Profile lakes={props.lakes} user={props.sessionObject} username={props.username}/>
      </div>
    );
  }
}

export async function getServerSideProps(context) {
  const session = await getServerSession(context.req, context.res, authOptions);
  console.log("___SHOW CURRENT SESSION___");
  console.log(session);

  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }

  const userEmail = session.user.email;
  console.log(userEmail);

  let client;
  try {
    client = await connectDatabase();
  } catch (error) {
    return {
      notFound: true,
    };
  }

  try {
    const allLakes = await Lake.find({}).populate("author");
    const userLakes = []
    allLakes.map((el) => {
      if(el.author.email === userEmail) {
        userLakes.push(el);
      }
    })
    // const userLakes = allLakes.filter((el) => (el.author.email = userEmail));
    const userUsername = userLakes[0].author.username;
    // const result = await Lake.find({});

    console.log("CLOSING CONNECTION");
    mongoose.connection.close();
    return {
      props: {
        sessionObject: JSON.parse(JSON.stringify(session)),
        lakes: JSON.parse(JSON.stringify(userLakes)),
        username: userUsername
      },
    };
  } catch (error) {
    console.log("CLOSING CONNECTION");
    mongoose.connection.close();
    return {
      notFound: true,
    };
  }
}

export default ProfilePage;
