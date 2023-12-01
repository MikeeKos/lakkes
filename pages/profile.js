import Head from "next/head";
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { authOptions } from "./api/auth/[...nextauth]";
import Profile from "../components/profile/profile";
import { connectDatabase } from "../helpers/db-util";
import mongoose from "mongoose";
import Lake from "../models/Lakt";
import User from "../models/User";

function ProfilePage(props) {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/auth");
    }
  }, [router, status]);

  if (status === "loading") {
    return (
      <React.Fragment>
        <Head>
          <title>Lakkes - Profile</title>
          <meta
            name="description"
            content="Manage, edit and delete your places"
          />
        </Head>
        <div>
          <div className="w-full h-[30rem] border-2 border-pageMenu flex items-center justify-center bg-page1 shadow-[inset_0_-4px_8px_rgba(0,0,0,0.2)]">
            <span className="font-page text-2xl sm:text-5xl md:text-4xl lg:text-5xl text-pageMenu font-extrabold tracking-wide text-center overflow-hidden p-5 bg-page1">
              loading...
            </span>
          </div>
        </div>
      </React.Fragment>
    );
  }

  if (status === "authenticated") {
    return (
      <React.Fragment>
        <Head>
          <title>Lakkes - Profile</title>
          <meta
            name="description"
            content="Manage, edit and delete your places"
          />
        </Head>
        <div>
          <Profile
            lakes={props.lakes}
            user={props.sessionObject}
            username={props.username}
          />
        </div>
      </React.Fragment>
    );
  }
}

export async function getServerSideProps(context) {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }

  const userEmail = session.user.email;

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
    const userLakes = [];
    allLakes.map((el) => {
      if (el.author.email === userEmail) {
        userLakes.push(el);
      }
    });

    const thisUser = await User.findOne({ email: userEmail });

    mongoose.connection.close();
    return {
      props: {
        sessionObject: JSON.parse(JSON.stringify(session)),
        lakes: JSON.parse(JSON.stringify(userLakes)),
        username: JSON.parse(JSON.stringify(thisUser.username)),
      },
    };
  } catch (error) {
    mongoose.connection.close();
    return {
      notFound: true,
    };
  }
}

export default ProfilePage;
