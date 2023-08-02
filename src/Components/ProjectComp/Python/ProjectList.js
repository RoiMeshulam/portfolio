
import Max1 from './media/MaximumPrioirtyMatchingExmple1.PNG'
import Max2 from './media/MaxPrioirty1.PNG'
import Max3 from './media/MaxPriority2.PNG'
import chat from './media/chat.jpg'
import pokemonPic from './media/Pokemon.jpg'

export const ProjectList = [
    {
        projectName: "Networkx",
        technologies: "Python",
        explaination: "The Networkx project involves summarizing two articles, namely 'Maximum Priority Matching' and 'Faster Maximum Priority Matchings in Bipartite Graphs', and implementing the two algorithms described in the articles. The goal of this project is to contribute to the improvement of the Networkx library by making a pull request on GitHub.The implemented algorithms focus on solving the problem of finding maximum priority matchings in bipartite graphs. The algorithms take a graph as input, where each node has a priority assigned to it. The objective is to return a perfect matching with the highest possible score based on the node priorities.Python is the chosen technology for implementing this project due to its readability, ease of use, and the availability of libraries like Networkx for graph-related operations. The implemented algorithms will be coded in Python, leveraging the functionalities and data structures provided by the Networkx library.Once the algorithms are implemented and tested, a pull request will be made on the Networkx GitHub repository. This pull request will propose the addition of the implemented algorithms to the library, thereby contributing to the enhancement of Networkx's functionality for handling maximum priority matchings in bipartite graphs.",
        media:[Max1,Max2,Max3],
        githubLink: "https://github.com/RoiMeshulam/networkx"
    },
    {
        projectName: "Chat",
        technologies: "Python",
        explaination: "The Chat project focuses on creating a live chat application that communicates with a server. The application provides various features such as group chat, private messaging, and the ability to request and download content from the server. The project utilizes Python as the primary technology for its implementation.The project includes the following classes:Server: This class represents the main server that hosts the chat application. It contains files that can be downloaded by clients and runs separate threads to handle each client's connection and communication.Client: This class represents each individual client connecting to the chat server. The client starts with a login screen, where the user provides their credentials. After successful login, an instance of the Client class is created. The client can then send messages to the group chat, initiate private conversations with specific users, and request to download content from the server.The Python programming language is chosen for this project due to its versatility, ease of use, and wide range of libraries and modules available for networking and multi-threading. Python provides the necessary tools for implementing client-server communication and managing concurrent connections.The chat application allows users to interact with each other in real-time, facilitating communication and collaboration. It enhances user engagement by offering features like private messaging and the ability to exchange files within the chat environment.",
        media: [chat],
        githubLink: "https://github.com/RoiMeshulam/Chat"
    },
    {
        projectName: "Pokemon Game",
        technologies: "Python",
        explaination: "The Pokemon Game project is a simple game implemented in Python. The objective of the game is to catch as many pokemons as possible using pokemon collectors known as Agents. The project involves several classes that perform various functions within the game. The Python programming language is chosen for this project due to its versatility, ease of use, and availability of libraries that support graph operations. Python provides the necessary tools for implementing game logic, graph algorithms, and interacting with the server. ",
        media:[pokemonPic],
        githubLink: "https://github.com/RoiMeshulam/OOP_Ex4"
    }



]