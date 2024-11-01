## Weather Dashboard

### TASK REQUIRMENTS

- Build a backend application using NestJS that ingests data from the Thingspeak API (no API keys needed for public channels),
- processes it through Kafka, and stores the processed data in a database, all orchestrated with Docker Compose for easy local setup.
- Provide secured API endpoints to retrieve the data. Create a simple frontend using React and TypeScript to display the data.

[Ninad Maladkar](mailto:ninad.dev20@gmail.com)

### [Click here to see the Video Review](LINK_TO_LOOM_VIDEO)

## Proposed Solution

- Developed a robust backend server using NestJS, TypeScript, and Express, capable of creating Kafka producers and consumers to efficiently ingest data from the Thingspeak API.
- Implemented data processing logic to handle the fetched data, which is then stored in a PostgreSQL database for reliable persistence.
- Designed a simple yet effective frontend application using React and TypeScript, which interacts with the backend via secured REST API endpoints using Basic Authentication to retrieve and display the processed data.

## Sequence Diagrams

![sequence-diagram](https://github.com/user-attachments/assets/279d5e99-606f-4a0e-afb7-36505289b872)

## Screenshots

#### Frontend overview

![frontend-screenshot](https://github.com/user-attachments/assets/837d68e5-44cf-412a-a0ff-9df89060dc06)

#### Swagger endpoint Demo

![swagger-demo](https://github.com/user-attachments/assets/4ca4a69d-a7b3-48f0-8f2f-17c151c0ee30)

#### Basic working system diagram

![system-diagram](https://github.com/user-attachments/assets/4520bf20-a968-4747-bcf1-618fd12e67b5)

## Assumptions

- The Thingspeak API provides consistent and reliable data without requiring API keys for public channels refreshing data every 1 minute.
- Users have Docker and Docker Compose installed on their local machines to facilitate easy setup and deployment of the application.
- The frontend and backend are running in the same network environment, allowing secure communication via REST API endpoints.
- Basic Authentication is sufficient for securing API endpoints in the context of this project for now.
- The project is intended for local development and testing purposes, not for production deployment.

## Libraries / Tools Used

- NestJS
- Express.js
- Typescript
- TypeORM
- PostgreSQL
- Swagger
- React
- ReCharts

## Setup

To run all the docker containers:

```bash
docker-compose up --build
```

If the database is not created, you can create it by running:

```bash
docker-compose exec -it <container_id_of_postgres_db> bash
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

Add these constants to .env file in the main codebase where docker-compose.yml file is

```
THINGSPEAK_API_URL=https://api.thingspeak.com/channels
THINGSPEAK_API_CHANNEL_ID=12397
API_USERNAME=admin
API_PASSWORD=password
```

Add these constants to .env file in the frontend app

```
REACT_APP_API_USERNAME=admin
REACT_APP_API_PASSWORD=password
REACT_APP_API_URL=http://localhost:3001/weather
```

## Running the tests

You can run the unit tests on the backend using:

`npm test`

## Future Work

1. Complete test coverage to achieve 90%
2. Add tests on the frontend project
3. Add end to end tests
4. Update the auth technique for the API from basic auth
5. Use SSE (Server side events) for sending data from backend to frontend
