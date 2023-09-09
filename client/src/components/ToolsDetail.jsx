import React, { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from 'axios';
import ToolContext from "../context/toolsState/ToolContext";
import AlertContext from "../context/alertState/AlertContext";
import LogContext from "../context/logState/LogContext";

export default function ToolsDetail() {
  const { toolName } = useParams();
  const [textAreaVal ,setTextAreaVal] = useState("");
  const [toolReviews , setToolReviews] = useState([]);

  const TObj = useContext(ToolContext);
  const AObj = useContext(AlertContext);
  const LObj = useContext(LogContext);

  // getting reviews from database and posting too with toolname , username , email , comment
  useEffect( ()=>{
    axios.get(`http://localhost:3001/review/${toolName}`).then((response) => {
      setToolReviews(response.data.data);
    }).catch((err)=> {console.log(err)});
  } , []);

  const handleChange = (e) => {
    setTextAreaVal(e.target.value);
  }

  const handleUpload = async () => {
    if(textAreaVal !== "" && LObj.cookies){

      const data = {
        toolName : toolName,
        name : LObj.cookies.name,
        email : LObj.cookies.email,
        comment : textAreaVal
      };
      await axios.post("http://localhost:3001/review" , data).then((response) => {
        AObj.showAlert(response.data.message , "Success" , "green");
        setToolReviews([...toolReviews , data]);
        setTextAreaVal("");
      }).catch((err) => console.log(err));
      
    }else{
      
      AObj.showAlert("Empty content should not be submit" , "Danger" , "red");

    }
  };

  return (
    <>
      <div style={{ width: "100%", height: "100%", padding: "20px" }}>
        {TObj.arrayOfTools
          .filter((tool) => {
            if (toolName === tool.name) {
              return tool;
            }
            return false;
          })
          .map((tool) => {
            return (
              <>
                <Link to={`/toolsDetail/${tool.name}`}>
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
      <div style={{ display: "grid", grid: "150px / auto auto auto" }}>
          {toolReviews.length === 0 ?
          
          <h2>No Reviews</h2> 
          
          :
            toolReviews.map((tool) => {
              return (
                <div style={{ background: "skyblue", margin: "5px", padding: "20px" }}>
                    <h2>{tool.name}</h2>
                    <p>{tool.comment}</p>
                </div>
                );
            })
        }
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <label htmlFor="">{LObj.cookies.name === "" ? "Not Log In" :  LObj.cookies.name }</label>
        <textarea
          type="textarea"
          value = {textAreaVal}
          name="comment"
          onChange={(e)=>handleChange(e)}
          placeholder="Write your Review"
        />
        <button style={{background:"red"}} type="button" onClick={handleUpload} >Upload</button>
      </div>
    </>
  );
}
