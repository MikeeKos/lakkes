import React from "react";

function ListOfComments(props) {
  const { items } = props;

  // const text1 =
  //   "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
  // const text2 =
  //   "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with ";
  // const text3 =
  //   "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets ";

  return (
    <React.Fragment>
      <div className="w-full h-full p-5 shadow-xl bg-page2 md:bg-page1">
        <div className="w-full h-full border-4 border-pageMenu p-3 bg-page1 shadow-xl">
          <div className="flex flex-row">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#383434"
              viewBox="0 -0.5 25 25"
              className="w-10 h-10"
            >
              <path
                fill="#383434"
                d="M8.382 10.234a.75.75 0 000 1.5v-1.5zm5.765 1.5a.75.75 0 100-1.5v1.5zm-5.047.608a.75.75 0 000 1.5v-1.5zm4.326 1.5a.75.75 0 100-1.5v1.5zm-5.53-7.07a.75.75 0 10.247 1.48l-.248-1.48zm.623.699l-.002.75h.002v-.75zm5.5 0l.006-.75h-.006v.75zm3.016 3.061l-.75-.005v.005h.75zm0 3.716h-.75.75zm-.786.418a.75.75 0 101.477.262l-1.477-.262zm-8.1-6.415a.75.75 0 10-.26-1.478l.26 1.478zM5.5 10.53h.75v-.004l-.75.004zM5.5 19h-.75a.75.75 0 001.117.654L5.5 19zm3.016-1.691v-.75a.75.75 0 00-.367.096l.367.654zm5.5 0v.75h.005l-.005-.75zm3.704-2.38a.75.75 0 00-1.478-.258l1.478.258zM7.28 7.384a.75.75 0 001.478.256L7.28 7.384zM10.987 5v-.75h-.004l.004.75zm5.5 0l.006-.75h-.006V5zM19.5 8.061l-.75-.005v.005h.75zm0 3.716h-.75v.005l.75-.005zm-2.65 2.284a.75.75 0 00.261 1.478l-.26-1.478zm-8.468-2.327h5.765v-1.5H8.382v1.5zm.718 2.108h4.326v-1.5H9.1v1.5zm-.957-5.59c.124-.021.249-.031.374-.031l.004-1.5c-.21 0-.419.017-.626.051l.248 1.48zm.376-.031h5.5v-1.5h-5.5v1.5zm5.494 0a2.289 2.289 0 012.272 2.306l1.5.01a3.789 3.789 0 00-3.76-3.816l-.012 1.5zm2.272 2.311v3.716h1.5v-3.716h-1.5zm0 3.717c0 .14-.012.28-.036.417l1.477.262c.04-.225.06-.453.059-.68h-1.5zM7.889 6.773a3.799 3.799 0 00-3.139 3.762l1.5-.008a2.299 2.299 0 011.9-2.276l-.261-1.478zM4.75 10.531V19h1.5v-8.469h-1.5zm1.117 9.123l3.016-1.69-.734-1.31-3.016 1.692.734 1.308zm2.649-1.595h5.5v-1.5h-5.5v1.5zm5.505 0a3.78 3.78 0 003.699-3.13l-1.478-.258a2.28 2.28 0 01-2.23 1.888l.009 1.5zM8.758 7.64a2.28 2.28 0 012.233-1.89l-.008-1.5A3.78 3.78 0 007.28 7.384l1.478.256zm2.229-1.89h5.5v-1.5h-5.5v1.5zm5.494 0a2.289 2.289 0 012.27 2.306l1.499.01a3.789 3.789 0 00-3.757-3.816l-.012 1.5zm2.269 2.311v3.716h1.5V8.061h-1.5zm0 3.721a2.299 2.299 0 01-1.9 2.28l.261 1.477a3.8 3.8 0 003.139-3.767l-1.5.01z"
              ></path>
            </svg>
            <span className="text-2xl sm:text-3xl font-bold tracking-wide truncate font-page text-pageMenu">
              comments
            </span>
          </div>
          <span className="font-page truncate opacity-60 text-sm">
            number of comments: {items.length}
          </span>
          <div className="w-full h-[1.5rem]"></div>
          {items.length !== 0 && (
            <div className="w-full h-[18rem] overflow-y-scroll">
              {items.map((item) => (
                <div
                  key={item._id}
                  className="w-full md:w-[80%] py-2 md:ps-10 flex flex-col"
                >
                  <span className="break-words brightness-[0.96] font-page text-pageMenu bg-page1 p-3">
                    {item.text}
                  </span>
                  <span className="brightness-[0.96] font-page text-pageMenu flex justify-end items-end py-2 pe-3 bg-page1">
                    <span className="opacity-60">~ {item.name}</span>
                  </span>
                </div>
              ))}
            </div>
          )}
          {items.length === 0 && (
            <div className="w-full h-[18rem] flex items-center justify-center pb-8 bg-page1">
              <span className="font-page text-2xl sm:text-5xl md:text-4xl lg:text-5xl text-pageMenu font-extrabold tracking-wide text-center overflow-hidden bg-page1 p-5">
                no comments yet...
              </span>
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
}

export default ListOfComments;
