import LogContext from "./LogContext";
import {useCookies} from "react-cookie"; 

const LogState = (props) => {
    const [cookies, setCookies] = useCookies(["access_token" , "name" , "email"]);

    const fillData = (data) =>{
        if(data !== null){
            setCookies("access_token" , data.token);
            setCookies("name" , data.data["name"]);
            setCookies("email" , data.data["email"]);
            window.localStorage.setItem("userID" , data.data["_id"]);
        }else{
            setCookies("access_token" , "");
            setCookies("name" , "");
            setCookies("email" , "");
            window.localStorage.removeItem("userID");
        }
    }

    return (
        <LogContext.Provider value={{cookies , fillData}}>
            {props.children}
        </LogContext.Provider>
    );
}

export default LogState;