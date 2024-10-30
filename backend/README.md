<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).

## Setup and Running the app

To run all the docker containers:

```bash
docker compose up --build
```

If the database is not created, you can create it by running:

```bash
docker compose exec -it <container_id_of_postgres_db> bash
```

Then, inside the container, run the following commands:

```bash
psql -U postgres
```

Then, inside the psql prompt, run the following command to create the database:

```bash
CREATE DATABASE weather;
\q
```

For now, to authorize the requests, basic authentication is used.
To authorize the requests, you can use the following credentials:

```bash
username: admin
password: password
```

Step 1: Create API Endpoints in NestJS

1. Define DTOs (Data Transfer Objects): Create DTOs to define the structure of the data you will send and receive through your API endpoints.
2. Create a Controller: Define routes to handle HTTP requests. Implement methods to retrieve data from the database using your service.
3. Implement Security: Use NestJS guards or middleware to secure your endpoints. Consider using JWT (JSON Web Tokens) for authentication.
4. Test Endpoints: Use tools like Postman or curl to test your API endpoints and ensure they return the expected data.

Step 2: Set Up a React Frontend

1. Initialize a React Project:
   Use create-react-app with TypeScript template to set up a new React project.
2. Install Dependencies:
   Install necessary packages such as axios for making HTTP requests and any UI libraries you plan to use (e.g., Material-UI, Bootstrap).
3. Create Components:
   Design components to display the data retrieved from your API.
   Use state management (e.g., React Context or Redux) if needed for managing application state.
4. Fetch Data from API:
   Use axios or fetch to call your API endpoints and retrieve data.
   Handle loading states and errors appropriately.
5. Display Data:
   Render the data in your components, using tables, charts, or other UI elements as needed.
6. Implement Security:
   If your API requires authentication, implement login functionality and store tokens securely (e.g., in local storage or context).

Step 3: Integrate Frontend with Backend

1. Configure CORS:
   Ensure your NestJS backend is configured to allow requests from your React frontend.
   Test Integration:
   Run both the backend and frontend locally using Docker Compose.
   Test the full flow from data ingestion to display in the frontend.

Step 4: Finalize and Deploy

1. Optimize and Refactor:
   Review your code for any optimizations or refactoring opportunities.
   Ensure all security measures are in place.
2. Documentation:
   Document your API endpoints and any setup instructions for future reference or deployment.
