import React from "react";
import CluserMap from "./cluser-map";
import MainWelcome from "./main-welcome";

function FirstView(props) {
  return (
    <React.Fragment>
      <div className="sm:grid sm:grid-cols-2 sm:gap-8">
        <div className="h-[50vh] bg-pageWhite w-full">
          <MainWelcome/>
        </div>
        <div className="mt-[1rem] sm:mt-0 h-[50vh]">
          <CluserMap lakes={props.lakes} />
        </div>
      </div>
    </React.Fragment>
  );
}

export default FirstView;
