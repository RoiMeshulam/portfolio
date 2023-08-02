import DFID from './media/DFID.PNG'
import DFSR from './media/DFSRecursive.PNG'
import DFStack from './media/DFStack.PNG'
import IDA from './media/IDA.PNG'
import elev from './media/Elevators.jpg'


export const ProjectList = [
    {
        projectName: "Search Algorithms",
        Technologies: "Java",
        explaination: "The Search Algorithms project focuses on implementing a search engine that supports various search algorithms to solve a given problem. The problem revolves around a topographic map represented by an NxN board. Each square on the board corresponds to a character representing a terrain cell, such as a dirt road, normal soil, sand, or cliff. The starting point of an autonomous off-road vehicle and the destination point are also provided.The objective of the search engine is to find the most cost-effective route from the starting point to the destination point using different algorithms studied in the context of search algorithms. The implemented algorithms include BFS (Breadth-First Search), DFS (Depth-First Search), DFID (Depth-First Iterative Deepening), IDA* (Iterative Deepening A*), A* (A-star), and DFBnB (Depth-First Branch-and-Bound).The application takes input parameters such as the board, start and end points, and the selected algorithm to use. It then executes the chosen algorithm to find the optimal path. The output is generated in a text file format, including information such as the path taken, the time taken to find the path, the nodes traversed in the path, and the total number of nodes created during the execution.Java is the chosen technology for implementing this project, providing a robust and versatile programming language for developing the search engine and its associated functionalities.",
        media: [DFSR, DFStack, DFID , IDA],
        githubLink: "https://github.com/RoiMeshulam/SearchAlgorithmsEx1"
    },
    {
        projectName: "Elevators",
        Technologies: "Java",
        explaination: "The Elevators project focuses on optimizing the selection of elevators in buildings to minimize the waiting time for people. The algorithm takes inputs such as elevator calls, the number of buildings, and the number of floors in each building. It then assigns the appropriate calls to each elevator in a way that minimizes the waiting time for passengers.The goal of the algorithm is to efficiently allocate elevator resources and ensure that elevators are dispatched to the appropriate floors based on the calls received. By intelligently assigning calls to elevators, the algorithm aims to minimize the time passengers spend waiting for an elevator to arrive.Java is the chosen technology for implementing this project due to its versatility and suitability for developing algorithms and managing complex logic. The project will leverage Java's object-oriented programming capabilities to design classes and data structures that represent elevators, buildings, and calls.The result of the project will be an optimized algorithm that efficiently handles elevator calls, providing an improved user experience by minimizing wait times for passengers.",
        media: [elev],
        githubLink: "https://github.com/RoiMeshulam/OOP_Ex0"
    }



]