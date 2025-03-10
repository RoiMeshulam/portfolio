// import LawyerFixVid from './projectAssets/La'
import NewCase from './projectAssets/NewCase.PNG'
import AdminDash from './projectAssets/AdminDash.PNG'
import BigDataVid from './projectAssets/BigData.mp4'
import BigDataHomePage from './projectAssets/BigDataHomePage.JPG'
import Nasa from './projectAssets/Nasa.JPG'
import RecentEvents from './projectAssets/RecentEvents.JPG'
import SunA from './projectAssets/SunA.JPG'
import Max1 from './projectAssets/MaximumPrioirtyMatchingExmple1.PNG'
import Max2 from './projectAssets/MaxPrioirty1.PNG'
import Max3 from './projectAssets/MaxPriority2.PNG'
import chat from './projectAssets/chat.jpg'
import pokemonPic from './projectAssets/Pokemon.jpg'
import FlyGiftVid from './projectAssets/FlyGiftVid.mp4'
import FlyGift1 from './projectAssets/FlyGift1.png'
import FlyGift2 from './projectAssets/FlyGift2.png'
import FlyGift3 from './projectAssets/FlyGiftHome.png'
import AddBet from  './projectAssets/AddBet.png'
import AddPlayer from  './projectAssets/AddPlayer.png'
import LastBets from  './projectAssets/LastBets.png'
import LastBetsS from  './projectAssets/LastBetsS.png'
import LoginPage from  './projectAssets/LoginPage.png'
import NavigationPage from  './projectAssets/NavigationPage.png'
import NavigationPageS from  './projectAssets/NavigationPageS.png'
import PlayerStatistics from  './projectAssets/PlayerStatistics.png'
import StatisticsPage from  './projectAssets/StatisticsPage.png'
import StatisticsS from  './projectAssets/StatisticsS.png'
import WinnerMonitorVid from './projectAssets/WinnerMonitor.mp4'
import DeliveryVid from './projectAssets/DeliveriesVid.mp4'
import Delivery1 from './projectAssets/DeliveriesSystem1.jpg'


export const ProjectList = [
    {
        projectName: "Deliveries System",
        technologies: "React Native, Firebase (Firestore, Functions, Authentication, Messaging), Node.js, Express, Azure Computer Vision, WhatsApp API",
        explaination: "An automated delivery tracking system integrating WhatsApp Webhooks, AI-powered image analysis (Azure Computer Vision), and real-time updates using Firebase Cloud Messaging. The system receives WhatsApp orders, extracts delivery details using AI, and updates all connected users in real-time. Includes a mobile app for Android & iOS (React Native CLI) and a secure REST API (Node.js & Express).",
        media: [Delivery1, DeliveryVid],
        githubLink: "https://github.com/RoiMeshulam/DeliveriesProject"
    },

    {
        projectName: "Winner Monitor",
        technologies: "React, Material-UI (MUI), Express, PostgreSQL, Jest, Axios (HTTP Requests)",
        explaination: "This project is a React app that integrates a RESTful API, databases, and various libraries to provide users with insights into their betting activities. The app calculates and displays net earnings or losses from betting activities to encourage informed decision-making and promote responsible gambling. The backend uses an Express server connected to a PostgreSQL database, with Jest for testing. Data retrieval and manipulation are done using Axios.",
        media: [WinnerMonitorVid,NavigationPage,AddBet,AddPlayer,LastBets,LoginPage,PlayerStatistics,StatisticsPage],  
        githubLink: "https://github.com/RoiMeshulam/WinnerMonitor"
    },
    {
        projectName: "Nasa Simulator",
        technologies: "React, Material-UI (MUI), Azure Event Hub (kafka),  Express, ElasticSearch(Bonsai.io), Redis(upstash.com), Axios(HTML Request), Cheerio (Web Scrapping)",
        explaination: "This project is a react App using microservices,databases,APIs and more that are representing an entire enviroment. The app is showing 3 main cards: Latest Events, NASA Information taken by NASA API, Sun Information taken by Web Scrapping from https://theskylive.com/sun-info, The system comprises a JavaScript Simulator module that connects to Redis, generating and sending messages to Azure Event Hub. Another JavaScript module, esClient, retrieves these messages and stores them in an Elasticsearch database on Bonsai.io." ,
        media: [BigDataHomePage,BigDataVid,RecentEvents,Nasa,SunA],
        githubLink:"https://github.com/ArikTatievski/Big-Data-Final"
    },
    {
        projectName: "FlyGift",
        technologies: "React, Firebase, Material-UI (MUI), Tequila API (KIWI API), EmailJS",
        explaination: "FlyGift is a creative solution aimed at improving employee satisfaction with holiday gifts. Throughout this project, I dedicated significant effort to ensuring the app is user-friendly and functions seamlessly across various devices (responsive design). Additionally, I successfully integrated APIs such as Kiwi and email APIs to enhance the app's functionality and user experience.",
        media: [FlyGiftVid,FlyGift3,FlyGift1,FlyGift2],
        githubLink: "https://github.com/RoniPick/Fly-Gift-Public"
    },
    {
        projectName: "LawyerFix",
        technologies: "React, CSS, Firebase, Material-UI (MUI)",
       media: [NewCase,AdminDash],
        explaination: "This project marks my first footprint in React. It allowed me to learn how to work with React hooks and integrate external libraries like MUI to enhance the app's functionality and design, testing my ability to adapt and utilize third-party resources effectively. Furthermore, LawyerFix provided me with an opportunity to deepen my understanding of CSS. Additionally, I integrated Firebase into the project, enabling seamless data storage and retrieval, and demonstrating my proficiency in working with backend services." ,
         githubLink:"https://github.com/RoiMeshulam/LawyerFixLastVersion"
    },
    
    
    {
        projectName: "Networkx",
        technologies: "Python, pull request",
        explaination: "A Python project that improved my skills in software development. I contributed to the NetworkX library through pull requests, enriching the open-source community with my personal code. Moreover, I learned about graph theory and algorithmic analysis. I summarized two articles, each detailing different algorithms for maximum priority matching in graphs, demonstrating my ability to distill complex concepts into concise summaries and then translate them into code.",
        media:[Max1,Max2,Max3],
        githubLink: "https://github.com/RoiMeshulam/networkx"
    },
    {
        projectName: "Chat",
        technologies: "Python, reliable UDP",
        explaination: "This project is a live chat application that communicates with a server. Users have the option to chat with everyone in the chat room, send private messages, and request to download content from the server. The project is built primarily with two classes: a server class, which acts as the main server containing files that can be downloaded, and runs a thread to handle each client; and a client class, which displays each client connecting. The application starts with a login screen, and only after logging in does the actual class creation take place. A client can send messages, send private messages, and download content from the server.",
        media: [chat],
        githubLink: "https://github.com/ArikTatievski/Chat"
    },
    {
        projectName: "Pokemon Game",
        technologies: "Python, OOP",
        explaination: "The Pokemon Game project is a simple game implemented in Python. The objective of the game is to catch as many pokemons as possible using pokemon collectors known as Agents. The project involves several classes that perform various functions within the game. The Python programming language is chosen for this project due to its versatility, ease of use, and availability of libraries that support graph operations. Python provides the necessary tools for implementing game logic, graph algorithms, and interacting with the server. ",
        media:[pokemonPic],
        githubLink: "https://github.com/RoiMeshulam/OOP_Ex4"
    }

    


]