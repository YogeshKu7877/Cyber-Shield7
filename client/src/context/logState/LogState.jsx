import { useState } from "react";
import LogContext from "./LogContext";
import {useCookies} from "react-cookie"; 

const LogState = (props) => {
    const [detail , setDetail] = useState(null);
    const[cookie , setCookie] = useCookies(["access_token"]);

    const fillData = (data) =>{
        if(detail === null){
            setDetail({
                name : data.name,
                email : data.email
            });
            setCookie("access_token" , data.token);
            window.localStorage.setItem("userID" , data._id);
        }else{
            setDetail(null);
            setCookie("access_token" , "");
            window.localStorage.removeItem("userID");
        }
    }

    return (
        <LogContext.Provider value={{detail , fillData}}>
            {props.children}
        </LogContext.Provider>
    );
}

export default LogState;