import React, { useContext } from "react";
import { Link } from "react-router";
import { userContext } from "../Authentication/AuthProvider";

const Error = () => {
  const { theme } = useContext(userContext);
  const isLight = theme == "light";

  return (
    <div>
      <section
        className={`${
          isLight
            ? "min-h-screen  flex items-center h-full p-16  bg-[#F9FAFB]"
            : "min-h-screen  flex items-center h-full p-16  bg-[#121212] text-white"
        }`}
      >
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <div className="max-w-md text-center">
            <h2 className="mb-8 font-extrabold text-9xl ">
              <span className={`${isLight ? "sr-only " : "sr-only"}`}>
                Error
              </span>
              404
            </h2>
            <p className="text-2xl font-semibold md:text-3xl">
              Sorry, we couldn't find this page.
            </p>
            <p className="mt-4 mb-8 ">
              But dont worry, you can find plenty of other things on our
              homepage.
            </p>
            <Link
              to={"/"}
              rel="noopener noreferrer"
              href="#"
              className={`${
                isLight
                  ? "px-8 py-3 font-semibold rounded bg-[#23BE0A] text-white"
                  : "px-8 py-3 font-semibold rounded dark:bg-gray-800  dark:text-gray-50"
              }`}
            >
              Back to homepage
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Error;
