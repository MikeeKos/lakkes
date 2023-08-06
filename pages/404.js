import React from "react";
import { useRouter } from "next/router";

export default function Custom404() {
  const router = useRouter();
  setTimeout(() => {
    router.reload();
  }, 2500);

  return (
    <React.Fragment>
      <h1>404 - page was not found</h1>
      <h2>Please wait for refresh</h2>
    </React.Fragment>
  );
}
