import React, { useState } from "react";
import { dataindustry } from "./data_industry";

// export default function MediaCard() {
//     { dataindustry.map((user) => {
//   return (
// <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden">
//   <img
//     className="h-40 w-full object-cover"
//     src={user.link}
//     alt="green iguana"
//   />
//   <div className="px-6 py-4">
//     <h5 className="text-lg font-bold mb-2">{user.title}</h5>
//     <p className="text-sm text-gray-700">
//       Lizards are a widespread group of squamate reptiles, with over 6,000
//       species, ranging across all continents except Antarctica.
//     </p>
//   </div>
//   <div className="px-6 py-4">
//     <button className="text-sm py-1 px-3 border border-gray-300 rounded-md bg-white text-gray-700 mr-2">
//       Share
//     </button>
//     <button className="text-sm py-1 px-3 border border-gray-300 rounded-md bg-white text-gray-700">
//       Learn More
//     </button>
//   </div>
// </div>
//   );
// })}
// }

const MediaCard = () => {
  const [showNotification, setShowNotification] = useState(false);

  const copyUrlToClipboard = () => {
    const url = window.location.href; // Get the current URL
    navigator.clipboard
      .writeText(url)
      .then(() => {
        setShowNotification(true);
        // Show the notification message
        setTimeout(() => {
          setShowNotification(false);
        }, 3000); // Hide the notification after 3 seconds
      })
      .catch((error) => {
        console.error("Failed to copy URL to clipboard:", error);
        // Handle the error in any desired way
      });
  };

  return (
    <div className="max-w-screen-xxl p-5 mx-auto dark:bg-[#ffffff] dark:text-gray-100 shadow mb-5">
      <div className="mb-5 text-center text-[30px] text-[#243c5a] text-front-mono">
        Industry 4.0 Technologies
      </div>
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-4 sm:grid-cols-2 ">
        {dataindustry.map((user) => {
          return (
            <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden">
              <a
                href="#"
                key={user.id}
                className="no-underline hover:no-underline"
              >
                <img
                  className="h-40 w-full object-cover"
                  src={user.link}
                  alt="green iguana"
                />
                <div className="px-6 py-4">
                  <h5 className="text-lg font-bold mb-2">{user.title}</h5>
                  <p className="text-sm text-gray-700">{user.summry}</p>
                </div>
              </a>
              <div className="px-6 py-4">
                <button
                  onClick={copyUrlToClipboard}
                  className="text-sm py-1 px-3 border border-gray-300 rounded-md bg-white text-gray-700 mr-2"
                >
                  Share
                </button>
                <button className="text-sm py-1 px-3 border border-gray-300 rounded-md bg-white text-gray-700">
                  Learn More
                </button>
              </div>
              {showNotification && (
                <div className="fixed bottom-0 inset-0 flex items-center justify-center z-50">
                  <div className="bg-green-500 text-white px-4 py-2 rounded-md ">
                    URL Copied to Clipboard!
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MediaCard;
