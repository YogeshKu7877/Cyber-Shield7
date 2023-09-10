import ToolContext from "./ToolContext";

const ToolState = (props) => {
  const arrayOfTools = [
    {
      name: "KALI Linux",
      description:
        "Kali Linux is one of the most common cybersecurity tools. It is an operating system containing at least 300 different tools for security auditing. Kali Linux provides various tools that organizations use to scan their networks and IT systems for vulnerabilities.The main benefit of Kali Linux is that it can be used by users with different levels of cybersecurity knowledge.As such, it does not require an advanced cybersecurity specialist to be competent.Most of the tools available in the operating system are executable, meaning that users can monitor and manage the security of their network systems with a single click. Kali Linux is readily available for use.",
      url: "https://www.kali.org/tools/",
    },
    {
      name: "Metasploit",
      description:
        "Metasploit consists of an excellent collection containing different tools for carrying out penetration testing exercises. IT experts and cybersecurity professionals use Metasploit to accomplish varying security objectives. These include identifying vulnerabilities in networks or systems, formulating strategies for strengthening cybersecurity defense, and managing the completed security evaluations.Metasploit can test the security of different systems, including online-based or web-based applications, networks, and servers, among others. Metasploit identifies all new security vulnerabilities as they emerge, thus ensuring round-the-clock security.Also, security professionals often use the tool to evaluate IT infrastructure security against vulnerabilities reported earlier.",
      url: "https://www.metasploit.com/download",
    },
    {
      name: "Cain and Abel",
      description:
        "Cain and Abel is one of the earliest cybersecurity tools used to uncover vulnerabilities in Windows Operating systems. Cain and Abel enable security professionals to discover weaknesses in the password security of systems running on the Windows operating system. It is a free cybersecurity tool used for password recovery. It has many functionalities, which include the ability to record VoIP communications. Also, Cain and Abel can analyze routing protocols to determine whether routed data packets can be compromised.",
      url: "https://www.techspot.com/downloads/2416-cain-abel.html",
    },
    {
      name: "Wireshark",
      description:
        "Wireshark, formerly known as Ethereal, is a console-based cybersecurity tool. Wireshark is an excellent tool for analyzing network protocols and is hence used for analyzing network security in real time. Wireshark analyzes network protocols and sniffs the network in real-time to assess the presence of vulnerabilities. Wireshark is a useful tool for scrutinizing all details related to network traffic at different levels, ranging from the connection level to all pieces of data packets. Security professionals use Wireshark to capture data packets and investigate the characteristics which individual data packets exhibit. The obtained information permits easy identification of weaknesses in the network’s security.",
      url: "https://www.wireshark.org/download.html",
    },
    {
      name: "Netstumbler",
      description:
        "Aircrack-ng contains a comprehensive set of utilities used to analyze the weaknesses of Wi-Fi network security. Cybersecurity professionals use it to capture data packets communicated through a network for continuous monitoring. Also, Aircrack-ng provides functionalities for exporting captured data packets to text files to be subjected to more security assessments. Besides, it permits capture and injection, which is essential in assessing the performance of network cards. More importantly, Aircrack-ng tests the reliability of WPA-PSK and WEP keys by cracking them to establish whether they possess the necessary strength. It is an all-rounded cybersecurity tool suitable for enhancing and improving network security.",
      url: "https://www.aircrack-ng.org/downloads.html",
    },
    {
      name: "Aircrack-ng",
      description:
        "Netstumbler is a free cybersecurity tool designed for systems running on Windows operating systems. The tool allows security experts to identify open ports on a network. It is also used for wardriving purposes. Netstumbler was developed for Windows systems only; hence there is no provision of source codes. The tool utilizes a WAP-seeking approach when searching for open ports, causing it to be among the most popular tools for network defense. It is also popular because of its ability to identify network vulnerabilities that may not be present in other types of security tools.",
      url: "http://www.netstumbler.com/downloads/",
    },
    {
      name: "Burp Suite",
      description:
        "Burp Suite is a robust cybersecurity tool used to enhance the security of a network. Security teams use the tool to conduct real-time scans on systems focused on detecting critical weaknesses. Also, Burp Suite simulates attacks to determine the different methods cybersecurity threats can compromise network security. There are three versions of Burp Suite; Enterprise, Community, and Professional. Enterprise and Professional are commercial versions meaning they are not free. The community version is a free edition, but most of the features are restricted. It only provides the manual tools deemed to be essential. Burp Suite is an appropriate security tool for businesses but can be a bit costly for small businesses.",
      url: "https://portswigger.net/burp/communitydownload",
    },
  ];

  return (
    <ToolContext.Provider value={{ arrayOfTools }}>
      {props.children}
    </ToolContext.Provider>
  );
};

export default ToolState;
