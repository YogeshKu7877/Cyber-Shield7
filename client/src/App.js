import './App.css';
import { BrowserRouter , Routes , Route } from "react-router-dom" ;

import NavBar from "./components/NavBar";

import Home from "./components/Home";
import EducationStructure from "./components/EducationStructure";
import HSD from "./components/HSD";
import Tools from "./components/Tools";
import ToolsDetail from "./components/ToolsDetail";
import AboutUs from "./components/AboutUs";
import Reporting from './components/Reporting';

import Footer from './components/Footer';

import Signin from "./components/Signin";
import Signup from "./components/Signup";

import AlertState from './context/alertState/AlertState';
import LogState from './context/logState/LogState';
import ToolState from './context/toolsState/ToolState';


function App() {
  //Array of static content
  const cyberSecurity = [
      {
          name: "CS1",
          description: "Desc of CS1",
          url: "http...........",
      },
      {
          name: "CS2",
          description: "Desc of CS2",
          url: "http...........",
      },
      {
          name: "CS3",
          description: "Desc of CS3",
          url: "http...........",
      },
      {
          name: "CS4",
          description: "Desc of CS4",
          url: "http...........",
      },
      {
          name: "CS5",
          description: "Desc of CS5",
          url: "http...........",
      },
  ];

  const digitalPrivacy = [
      {
          name: "DP1",
          description: "Desc of DP1",
          url: "http...........",
      },
      {
          name: "DP2",
          description: "Desc of DP2",
          url: "http...........",
      },
      {
          name: "DP3",
          description: "Desc of DP3",
          url: "http...........",
      },
      {
          name: "DP4",
          description: "Desc of DP4",
          url: "http...........",
      },
      {
          name: "DP5",
          description: "Desc of DP5",
          url: "http...........",
      },
  ];

  const privacyRisk = [
      {
          name: "PR1",
          description: "Desc of PR1",
          url: "http...........",
      },
      {
          name: "PR2",
          description: "Desc of PR2",
          url: "http...........",
      },
      {
          name: "PR3",
          description: "Desc of PR3",
          url: "http...........",
      },
      {
          name: "PR4",
          description: "Desc of PR4",
          url: "http...........",
      },
      {
          name: "PR5",
          description: "Desc of PR5",
          url: "http...........",
      },
  ];

  const dataSecurity = [
      {
          name: "DS1",
          description: "Desc of DS1",
          url: "http...........",
      },
      {
          name: "DS2",
          description: "Desc of DS2",
          url: "http...........",
      },
      {
          name: "DS3",
          description: "Desc of DS3",
          url: "http...........",
      },
      {
          name: "DS4",
          description: "Desc of DS4",
          url: "http...........",
      },
      {
          name: "DS5",
          description: "Desc of DS5",
          url: "http...........",
      },
  ];


  return (
    <>
      <ToolState>

<<<<<<< HEAD
        <AlertState>
          
          <BrowserRouter>
            <NavBar/>
            
=======
        <LogState>
>>>>>>> nikhil

          <AlertState>
            
            <BrowserRouter>
              <NavBar/>

              <Routes>

                <Route exact path = '/' element = {<Home /> } />
                <Route exact path = '/cyberSecurity' element = {<EducationStructure heading="Cyber Security" array={cyberSecurity}/> } />
                <Route exact path = '/digitalPrivacy' element = {<EducationStructure heading="Digital Privacy" array={digitalPrivacy} /> } />
                <Route exact path = '/privacyRisk' element = {<EducationStructure heading="Privacy Risk and Threats" array={privacyRisk} /> } />
                <Route exact path = '/dataSecurity' element = {<EducationStructure heading="Data Security" array={dataSecurity} /> } />
                <Route exact path = '/hsd' element = {<HSD /> } />
                <Route exact path = '/tools' element = {<Tools /> } />
                <Route exact path = '/toolsDetail/:toolName' element = {<ToolsDetail /> } />
                <Route exact path = '/aboutUs' element = {<AboutUs /> } />
                <Route exact path = '/reporting' element = {<Reporting /> } />

                <Route exact path = '/signin' element = {<Signin /> } />
                <Route exact path = '/signup' element = {<Signup /> } />

              </Routes>

              <Footer />
            
            </BrowserRouter>

          </AlertState>

        </LogState>
      </ToolState>
    </>
  );
}

export default App;
