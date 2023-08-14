# SpaceX Landing Page

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Technologies Used](#technologies-used)

## Overview

The primary goal of this assignment is to develop a sleek and user-friendly landing page that communicates the essence of the spacex api. Leveraging the power of modern web development tools, the landing page will seamlessly integrate with a remote API, fetching and displaying dynamic content that keeps visitors informed and engaged.

In addition to the visual appeal and responsiveness of the landing page, the integration of authentication mechanisms adds a layer of security and personalization. Users will have the opportunity to sign up, log in, and access personalized content based on their roles or preferences. This feature enhances user experience.

## Features

- Interactive and visually appealing landing page design.
- Seamless integration with a remote API to display real-time content.
- User authentication and authorization for enhanced security and personalized experiences.

## Getting Started

Follow these steps to set up and run on your local machine.

### Prerequisites

Before you begin, make sure you have the following installed:

- Node.js: [Download & Install Node.js](https://nodejs.org/)
- MongoDB: [Download & Install MongoDB](https://www.mongodb.com/)

### Installation

1. Clone this repository to your local machine:

   ```bash
   git clone [repository URL]
   ```
   
2. Navigate to the project directory:
    ```bash
    cd [project-directory]
    ```

3. Install server and client dependencies
    
    ```bash
    npm install #on root folder
    
    cd ./client #client folder
    npm install
    ```

### Usage

1. Start Node Server and React Server

    ```bash
    node server.js #on root folder
    ```
    App server will start running on PORT:5000
    ```bash
    cd ./client #changing dir to client
    npm start
    ```

    App frontend server will run on PORT:3000

2. Access the application in your browser at http://localhost:3000

### Folder Structure

```csharp
[brainstrom]
├─ .gitignore
├─ client
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ postcss.config.js
│  ├─ public
│  │  ├─ favicon.ico
│  │  ├─ index.html
│  │  ├─ manifest.json
│  │  └─ robots.txt
│  ├─ README.md [Client]
│  ├─ src
│  │  ├─ App.js
│  │  ├─ components
│  │  ├─ context
│  │  ├─ index.js
│  │  └─ Utility
│  │     ├─ Asset
│  │     └─ helper-component
│  └─ tailwind.config.js
├─ config
│  └─ db_config.js
├─ controller
│  ├─ authController.js
│  ├─ dataController.js
│  └─ JWTController.js
├─ handler
│  └─ error.js
├─ models
│  └─ User.js
├─ package-lock.json
├─ package.json
├─ README.MD
└─ server.js
```

### Technologies Used
- Front-end
    - ReactJs
    - Tailwind
    - Axios
    - Mapbox [for fetching map of lat/long]

- Back-end
    - NodeJs
    - Express
    - Json Web Token [ Auth ]
    - Axios

- Database
    - Mongo DB

### Thank you