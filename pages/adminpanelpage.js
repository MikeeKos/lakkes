import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { authOptions } from "./api/auth/[...nextauth]";

function AdminPanelPage(props) {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/auth");
    }
  }, [router, status]);

  if (status === "loading") {
    return (
      <div>
        <div className="w-full h-[30rem] border-2 border-pageMenu flex items-center justify-center bg-page1">
          <span className="font-page text-2xl sm:text-5xl md:text-4xl lg:text-5xl text-pageMenu font-extrabold tracking-wide text-center overflow-hidden p-5 bg-page1">
            loading...
          </span>
        </div>
      </div>
    );
  }

  if (status === "authenticated") {
    return <h1>AdminPanelPage</h1>;
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

  return {
    props: {
      sessionObject: JSON.parse(JSON.stringify(session)),
    },
  };
}

export default AdminPanelPage;
