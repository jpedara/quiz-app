# QuizApp

Welcome to QuizApp! This is a project that consists of a frontend built with React.js and a backend built with Node.js. 

## Getting Started

To get started with QuizApp, follow the steps below:

## Frontend (React.js)

This repository contains a simple React.js application with a structured folder organization and basic components. Below is an overview of the project's folder structure and components.

### Folder Structure

```
FrontEnd/
├── public/
│ ├── index.html
│ └── ...
├── src/
| ├── __tests__/
│ ├── components/
│ ├── styles/
│ │ └── main.css
│ ├── App.js
│ └── index.js
├── node_modules/
├── package.json
└── README.md

```

### Description

- **public/**: Contains public assets and the `index.html` file.
- **src/**: This directory contains the React application's source code.
  - **components/**: Contains reusable UI components.
  - **styles/**: Contains styling files (CSS, SCSS, etc.).
  - **tests/**: This directory contains all test files
- **App.js**: The main component that serves as the root of the application.
- **index.js**: Entry point for rendering the React application.
- **node_modules/**: Directory where project dependencies are installed.
- **package.json**: File containing project metadata and dependencies.

### Usage
1. Clone this repository to your local machine. ```git clone <repository_url>```
2. Navigate to the frontend directory: ```cd front_end ```
3. Install the required dependencies: ```npm install ```
4. Start the frontend application: ```npm start```.
This will launch the QuizApp frontend in your default web browser.
5. To run the test cases for the frontend: ```npm test```



## Backend (Node.js)
This repository contains a simple Node.js application with a structured folder organization and basic unit tests. Below is an overview of the project's folder structure and components.

#### Folder Structure


```
Backend/
├── src/
│ ├── routes/
│ │ └── questions.router.js
│ ├── controllers/
│ │ └── questions.controller.js
│ └── loaders/
│   └── express.loader.js
├── index.js
├── models/
│ └── questions.js
├── tests/
│ ├── questions.controller.test.js
├── node_modules/
├── package.json
└── README.md
```


#### Description

- **src/**: This directory contains the application's source code.
  - **routes/**: Contains route definitions for different endpoints.
  - **controllers/**: Contains logic that handles requests from routes.
  - **loaders/**: Contains code responsible for setting up application components.
- **index.js**: The entry point of the application.
- **models/**: Contains data models or schemas.
  - **questions.js**: File containing questions data or schema.
- **tests/**: Contains unit tests for the application.
  - **questions.controller.test.js**: Test cases for the `questions.controller.js` module.
- **node_modules/**: Directory where project dependencies are installed.
- **package.json**: File containing project metadata and dependencies.

#### Usage

1. Navigate to the backend directory:  ```cd back_end ```
2. Install the required dependencies: ```npm install ```
3. Start the backend application: ```npm start```This will start the backend server for QuizApp.
4. To run the test cases for the backend:```npm test```


## Contact

If you have any questions or need assistance, feel free to contact us at [Jyothi Prakash Edara](mailto:prakashchowdaryedara@gmail.com).
