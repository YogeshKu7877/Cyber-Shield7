import React from "react";

export default function EducationStructure(props) {

  return (
    <>
        <h4 className="mb-2 text-3xl text-center my-8 font-bold text-gray-900 dark:text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                {props.heading}
            </span>
        </h4>
      <div style={{ width: "100%", height: "100%", padding: "20px" }}>
        { props.array.map((tool, key) => {
          return (
              <article key={key} className="rounded-xl bg-white p-4 ring ring-indigo-50 sm:p-6 lg:p-8 mb-3">
                <div className="flex items-start sm:gap-4">
                  <div>
                    <h3 className="mt-1 text-lg font-medium sm:text-xl">
                        {tool.name}
                    </h3>

                    <p className="mt-1 text-sm text-gray-700">
                      {tool.description}
                    </p>
                  </div>
                </div>
              </article>
          );
        })}
        
      </div>
    </>
  );
}
