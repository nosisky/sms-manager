# SMS Management API
### SMS MANAGEMENT API is a simple API that models, sending, receiving and listing of users message.

## Table of Contents

* [Features](#features)
* [Technologies](#technology)
* [Installation and Setup](#installation)
* [How to Contribute](#how-to-contribute)
* [License](#license)

## Features
SMS API consists of the following features:
### Feature
- Creating of account
- Sending of messages
- Deletion of users
- Deletion of messages

## Technology
**SMS_API** makes use of a host of modern technologies. The core ones are:

* ECMAScript 6: Also known as ES2015, this is a version of Javascript with
    next-generation features like arrow functions, generators, enhanced object literals,
    spread operators and more. The ES2015 is used in many areas of this project. See [this link](https://en.wikipedia.org/wiki/ECMAScript) for details.
* NodeJS: Node.js is an open-source, cross-platform JavaScript run-time environment for executing JavaScript code on the server-side.
    See [this link](https://en.wikipedia.org/wiki/Node.js) for details.
* ExressJS: ExpressJS, is a web application framework for Node.js, It is designed for building web applications and APIs.
    see [this link](https://en.wikipedia.org/wiki/Express.js).
* Postgresql & Sequelize: Postgresql is an advanced open source Object-Relational Model (ORM) database.Sequelize is a promise-based ORM for Node.js v4 and up. It supports the dialects PostgreSQL, MySQL, SQLite and MSSQL and features solid transaction support, relations, read replication and more.
* Major codes are written using the Airbnb javascript style guide, see [this link](https://github.com/airbnb/javascript) for details.

## Installation
> Git clone this repository

> CD to the created directory

> run ```npm install```

> run ```npm start``` to start server

> Install sequelize-cli, Create Postgresql database, Navigate to server directory and run migrations:
```
- npm install -g seqeulize-cli
- cd server
- sequelize db:migrate


```
> Create a `.env` file in the root directory of the application. Use a different database for your testing and development. Example of the content of a .env file looks like this. Additionally, the contentof the .env.sample file should give you an overview of what the environment variables should look like. ```

## API Routes
> POST : ```/api/v1/contact```
API routes for users to create an account

> POST : ```/api/v1/message```
An API route that allow users to send message to other users

> DELETE : /api/v1/contact/<contactId>
An API route that allow users to delete a contact from the database

> DELETE : ```/api/v1/message/<contactId>```
An API route that allow users to delete message history of a user

> GET : ```/api/v1/message/<contactId>```
An API route that allow users to get message history of a user

## How to Contribute
Contributions to this project are welcomed, If you need to contribute to this project, kindly take steps below
* **Fork** the repository
* Follow [Installation and Setup](#installation) as explained earlier
* Create a branch off **master** for the feature you wish to add
* Make neccessary changes, commit and raise a pull request against develop
**Note** when making contributions, please endevour to follow the [Airbnb](https://github.com/airbnb/javascript) javascript style guide.

## License
This project is authored by **Abdulrasaq Nasirudeen** (nosisky@gmail.com) and is licensed for your use, modification and distribution under the **MIT** license.
[MIT][license]
<!-- Definitions -->
[license]: LICENSE
[author]: Abdulrasaq Nasirudeen
