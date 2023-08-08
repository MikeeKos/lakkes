"use client";

import Link from "next/link";
import Logo from "./logo";
import { useSession, signOut } from "next-auth/react";
import React from "react";
import { motion } from "framer-motion";

// function MainNavigation() {
//   const { data: session, status } = useSession();

//   function logoutHandler() {
//     signOut();
//   }

//   return (
//     <header className={classes.header}>
//       <Link href="/">
//         <Logo />
//       </Link>
//       <nav>
//         <ul>
//           <li>
//             <Link href="/list">List of lakes</Link>
//           </li>
//           <li>
//             <Link href="/add">Add new lake</Link>
//           </li>
//           {!session && (
//             <li>
//               <Link href="/auth">Login/Register form</Link>
//             </li>
//           )}
//           {status === "authenticated" && (
//             <li>
//               <button onClick={logoutHandler}>Logout</button>
//             </li>
//           )}
//         </ul>
//       </nav>
//     </header>
//   );
// }

function MainNavigation() {
  const line = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="800"
      height="800"
      fill="none"
      viewBox="0 0 24 24"
      className="rotate-90 w-6 h-6"
    >
      <g>
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 21V3"
        ></path>
      </g>
    </svg>
  );
  return (
    <React.Fragment>
      <div>
        <div className="bg-gray-400 h-16 flex items-center justify-evenly rounded-b-[3.5em] rounded-t-2xl mx-6">
          <div className="px-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z"
              />
            </svg>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="800"
              height="800"
              className="w-6 h-6"
              viewBox="0 -31.5 1087 1087"
            >
              <path d="M665.58 1024c-151.484 0-290.524-52.478-372.081-140.528-50.855-54.912-75.2-118.617-70.196-184.35s42.199-113.477 90.213-167.984c33.273-37.6 40.576-62.892 36.79-73.983-5.005-13.525-31.92-24.48-46.798-27.05-104.55-.812-195.17-34.355-243.456-90.214A131.06 131.06 0 0126.915 232.5C42.064 134.982 170.96 61.405 326.635 61.405c158.788 0 279.704 76.012 281.327 176.64a139.987 139.987 0 01-37.33 97.788c-29.35 32.19-33.948 54.101-31.514 59.106 0 0 10.956 23.398 106.58 26.103 230.741 6.628 415.497 122.54 439.166 275.51a228.442 228.442 0 01-57.483 187.326C952.181 971.387 816.792 1024 665.58 1024zM327.447 142.016c-120.104 0-212.076 54.1-219.515 102.386a51.126 51.126 0 0014.472 42.199c31.784 37.6 104.415 61.946 184.08 61.946h6.356c9.197 1.488 89.943 15.96 113.207 81.152 16.23 45.174-1.353 97.382-52.343 155.135-40.576 45.715-67.627 78.852-70.196 120.375a165.144 165.144 0 0048.826 122.945c66.544 71.684 183.403 114.559 312.57 114.559s240.344-42.064 300.667-112.395a151.348 151.348 0 0038.953-121.728C987.076 596.06 831.806 507.2 643.128 501.788c-100.087-2.84-158.652-27.05-178.94-75.606-17.718-41.658-1.488-93.054 45.58-144.585a59.24 59.24 0 0016.772-42.605c-.136-45.986-82.505-96.976-199.498-96.976zm548.316 12.308L810.706 0l-57.482 154.324h41.117v48.555h40.44v-48.555h40.982zM1029.14 377.49l-89.538-212.212-78.988 212.212h56.4v66.815h55.59V377.49h56.536zM168.525 675.588L79.123 463.512 0 675.588h56.536v66.95h55.453v-66.95h56.536zm69.926 270.371l-72.63-172.177-64.11 172.177h45.85v54.101h45.04v-54.1h45.85zm514.773-626.762l-59.376-140.934-52.614 140.934h37.6v44.498h36.79v-44.498h37.6zm-54.507 580.776a33.813 33.813 0 110-67.626c102.521 0 192.465-49.773 192.465-106.444a65.462 65.462 0 00-15.96-40.576 33.827 33.827 0 1152.884-42.2 133.089 133.089 0 0130.702 83.181c-.135 97.112-114.289 173.665-260.091 173.665z"></path>
            </svg>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
              />
            </svg>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="800"
              height="800"
              fill="none"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <g stroke="#000" strokeLinecap="round" strokeWidth="1.5">
                <path
                  strokeLinejoin="round"
                  d="M15 12H6m0 0l2 2m-2-2l2-2"
                ></path>
                <path d="M12 21.983c-1.553-.047-2.48-.22-3.121-.862-.769-.768-.865-1.946-.877-4.121M16 21.998c2.175-.012 3.353-.108 4.121-.877C21 20.243 21 18.828 21 16V8c0-2.828 0-4.243-.879-5.121C19.243 2 17.828 2 15 2h-1c-2.829 0-4.243 0-5.121.879-.769.768-.865 1.946-.877 4.121M3 9.5v5c0 2.357 0 3.535.732 4.268.732.732 1.911.732 4.268.732M3.732 5.232C4.464 4.5 5.643 4.5 8 4.5"></path>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default MainNavigation;
