import './App.css';
import { BrowserRouter , Routes , Route } from "react-router-dom" ;

import NavBar from "./components/NavBar";

import Home from "./components/Home";
import EducationStructure from "./components/EducationStructure";
import HSD from "./components/HSD";
import Tools from "./components/Tools";
import ToolsDetail from "./components/ToolsDetail";
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
          name: "Strong and Unique Passwords",
          description: "Use strong, complex passwords that combine upper and lower-case letters, numbers, and symbols. Avoid using easily guessable information like birthdays or common words. Use different passwords for each online account to prevent a breach from affecting multiple ",
          
      },
      {
          name: " Two-Factor Authentication (2FA)",
          description: "Enable 2FA whenever possible. It adds an extra layer of security by requiring you to enter a one-time code sent to your mobile device.",
          
      },
      {
          name: "Regular Software Updates",
          description: "Keep your operating system, browsers, and applications up to date. Cybercriminals often exploit vulnerabilities in outdated software.",
          
        },
      {
          name: "Beware of Phishing Attacks",
          description: "Be cautious when clicking on links or opening attachments in emails, especially if they are from unknown sources. Verify the legitimacy of websites and emails by checking for spelling errors, unusual sender addresses, and unsolicited requests for personal information.",
          
      },
      {
          name: "Secure Your Wi-Fi Network",
          description: "Set a strong, unique password for your Wi-Fi network. Use encryption (WPA3 or WPA2) to protect your network from unauthorized access.",
          
      },
  ];

  const digitalPrivacy = [
      {
          name: "Protect Personal Information",
          description: "Avoid oversharing personal information on social media platforms. Use privacy settings to limit access to your profiles and posts.",

      },
      {
          name: "Be Cautious with Public Wi-Fi",
          description: "Avoid conducting sensitive transactions, like online banking, over public Wi-Fi networks. If necessary, use a virtual private network (VPN) for added security.",

      },
      {
          name: "Backup Your Dat",
          description: "Regularly back up important files and data to an external device or cloud storage to mitigate the impact of ransomware or data loss.",

      },
      {
          name: "Report Suspicious Activity",
          description: "If you encounter any suspicious online activity or become a victim of cybercrime, report it to the appropriate authorities and your internet service provider",

      },
      {
          name: "Educate Yoursel",
          description: "Stay informed about the latest cybersecurity threats and best practices by following reputable online sources and news outlets.",

      },
  ];

  const privacyRisk = [
      {
          name: "General Data Protection Regulation (GDPR)",
          description: "The GDPR is a European Union regulation that governs the data protection and privacy of EU citizens. It imposes strict rules on how organizations handle personal data and requires them to notify individuals of data breaches promptly."
      },
      {
          name: " California Consumer Privacy Act (CCPA)",
          description: "The CCPA grants California residents certain rights over their personal information held by businesses, including the right to know what data is collected and the right to request its deletion."
      },
      {
          name: "Computer Fraud and Abuse Act (CFAA) (United States)",
          description: "The CFAA is a federal law in the United States that makes it illegal to access computer systems without authorization, including hacking, phishing, and spreading malware.",
   
      },
      {
          name: "Cybersecurity Information Sharing Act (CISA) (United States)",
          description: "CISA encourages the sharing of cybersecurity threat information between private sector companies and government agencies to improve overall cybersecurity."
      },
      {
          name: " EU NIS Directive (Network and Information Systems Directive)",
          description: "The NIS Directive is a European Union directive aimed at enhancing the overall level of cybersecurity in the EU. It requires operators of essential services and digital service providers to take appropriate security measures and report significant cybersecurity incidents."
      },
  ];

  const dataSecurity = [
      {
          name: "Payment Card Industry Data Security Standard (PCI DSS)",
          description: "PCI DSS is a global standard that outlines security requirements for organizations that handle credit card data. Compliance with PCI DSS is essential for businesses that process payment card transactions.",

      },
      {
        name: " Data Breach Notification Laws",
        description: "Many countries and states have laws that require organizations to notify individuals affected by data breaches. These laws typically have specific requirements for reporting and notifying affected parties.",
      },
      {
        name: "Telecommunications Act (Various Countries)",
        description: " Different countries have their own telecommunications regulations that may include provisions related to cybersecurity and data protection in the context of telecommunications services.",
      },
      {
          name: " Federal Information Security Modernization Act (FISMA) ",
          description: " FISMA mandates that federal agencies in the United States develop, implement, and manage information security programs to protect sensitive government information.",
          
      },
      {
          name: "Children's Online Privacy Protection Act (COPPA) (United States)",
          description: " COPPA is a U.S. law that regulates the online collection of personal information from children under the age of 13. It requires parental consent for collecting data from minors.",
         
      },
  ];


  return (
    <>
      <ToolState>

        <LogState>


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
