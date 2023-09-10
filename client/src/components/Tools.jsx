import React, { useContext } from "react";
import { Link } from "react-router-dom";
//Context
import ToolContext from "../context/toolsState/ToolContext";

export default function Tools() {
  //Context
  const TObj = useContext(ToolContext);

  return (
    <>
      <h4 className="mb-2 text-3xl text-center my-8 font-bold text-gray-900 dark:text-white">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          Privacy-Focused Tools
        </span>
      </h4>
      <div style={{ width: "100%", height: "100%", padding: "20px" }}>
        {TObj.arrayOfTools.map((tool, key) => {
          return (
            <Link key={key} to={`/toolsDetail/${tool.name}`}>
              <article className="rounded-xl bg-white p-4 ring ring-indigo-50 sm:p-6 lg:p-8 mb-3">
                <div className="flex items-start sm:gap-4">
                  <div>
                    <h3 className="mt-1 text-lg font-medium sm:text-xl">
                      {tool.name}
                    </h3>

                    <p className="mt-1 text-sm text-gray-700">
                      {tool.description.slice(0, 90)}...Read more
                    </p>
                  </div>
                </div>
              </article>
            </Link>
          );
        })}
      </div>
    </>
  );
}
