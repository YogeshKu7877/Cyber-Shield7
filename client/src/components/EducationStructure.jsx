import React from "react";

export default function EducationStructure(props) {

  return (
    <>
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
