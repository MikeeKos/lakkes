import Head from "next/head";
import React, { useEffect, useState } from "react";
import LakeContent from "../../../components/lakes/lake-detail/lake-content";
import { useRouter } from "next/router";

function SingleLakePage() {
  const [lakeData, setLakeData] = useState([]);

  const router = useRouter();
  const { lakeId } = router.query;

  useEffect(() => {
    if (!router.isReady) return;
    const fetchLakeData = async () => {
      try {
        const response = await fetch(`/api/lake/${lakeId}`);

        if (!response.ok) {
          const text = await response.text();
          throw new Error(text);
        }

        const data = await response.json();

        setLakeData(JSON.parse(JSON.stringify(data.data)));
      } catch (error) {}
    };

    fetchLakeData();
  }, [lakeId, router.isReady]);

  return (
    <React.Fragment>
      <Head>
        <title>Lakkes</title>
        <meta name="description" content="your favorite place" />
      </Head>
      {lakeData.length === 0 && (
        <div>
          <div className="w-full h-[30rem] border-2 border-pageMenu flex items-center justify-center bg-page1 shadow-[inset_0_-4px_8px_rgba(0,0,0,0.2)]">
            <span className="font-page text-2xl sm:text-5xl md:text-4xl lg:text-5xl text-pageMenu font-extrabold tracking-wide text-center overflow-hidden p-5 bg-page1">
              loading...
            </span>
          </div>
        </div>
      )}
      {lakeData.length !== 0 && <LakeContent lake={lakeData} />}
    </React.Fragment>
  );
}

export default SingleLakePage;
