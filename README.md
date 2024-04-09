```markdown
# NoSQL Social Network API

## Overview
 A highly scalable Social Network API leveraging the power of NoSQL databases with MongoDB. This project utilizes Express.js for efficient routing and Mongoose for object data modeling (ODM), facilitating the creation, updating, and management of user profiles, thoughts, reactions, and friendships. Designed for social media startups, it offers a robust solution for handling large volumes of unstructured data, ensuring smooth and responsive interactions on the platform. This API supports functionalities like user management, thought sharing, reactions, and building friend lists, making it an ideal backbone for developing full-fledged social networking applications. This project is a backend application for a social network web platform where users can post thoughts, react to friends' thoughts, and create a friends list. It utilizes MongoDB, a NoSQL database, with Express.js for routing and the Mongoose ODM for data modeling.


## Table of Contents

1. [Overview](#overview)
2. [User Story](#user-story)
3. [Acceptance Criteria](#acceptance-criteria)
4. [Installation](#installation)
5. [Usage](#usage)
6. [Features](#features)
7. [Screenshots](#screenshots)
8. [Deployed Application](#deployed-application)
9. [License](#license)
10. [Acknowledgements](#acknowledgements)
11. [Code Attribution](#code-attribution)
12. [External Resources](#external-resources)


## User Story

AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data


## Acceptance Criteria


- GIVEN a social network API
- WHEN I enter the command to invoke the application
- THEN my server is started and the Mongoose models are synced to the MongoDB database
- WHEN I open API GET routes in Insomnia for users and thoughts
- THEN the data for each of these routes is displayed in a formatted JSON
- WHEN I test API POST, PUT, and DELETE routes in Insomnia
- THEN I am able to successfully create, update, and delete users and thoughts in my database
- WHEN I test API POST and DELETE routes in Insomnia for reactions and friends
- THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list


## Installation

To install this project, clone the repo and navigate to the project directory. Run `npm install` to install all required dependencies.

## Usage

To start the application, run `npm start` from the command line. Use an API testing tool like Insomnia or Postman to test the API routes.

## Features

- User, Thought, Reaction, and Friend models and routes
- Ability to create, read, update, and delete (CRUD) operations for each model
- Data validation and error handling

## Screenshots

(Include screenshots of your API being tested through Insomnia/Postman)

## Deployed Application

(Link to video walkthrough and any deployment links if applicable)

## License

This project is licensed under the MIT license.

## Acknowledgements



## Code Attribution



## External Resources

- [MongoDB](https://www.mongodb.com/)
- [Express.js](https://expressjs.com/)
- [Mongoose](https://mongoosejs.com/)
- [Day.js](https://day.js.org/)
