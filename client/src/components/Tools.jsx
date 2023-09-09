import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import ToolContext from "../context/toolsState/ToolContext";

export default function Tools() {

  const TObj = useContext(ToolContext);

  return (
    <>
      <div
        style={{width: "100%", height: "100%" ,padding:"20px" }}
      >
        {TObj.arrayOfTools.map((tool) => {
          return (
            <>
              <Link to = {`/toolsDetail/${tool.name}`}>
                <div
                  style={{
                    backgroundColor: "red",
                    width: "100%",
                    height: "200px",
                    borderRadius: "16px",
                    padding: "33px",
                    marginBottom: "10px",
                  }}
                >
                    <h2>{tool.name}</h2>
                    <p>{tool.description}</p>
                </div>
              </Link>
            </>
          );
        })}
      </div>
    </>
  );
}
