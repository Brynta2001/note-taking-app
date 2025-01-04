# Backend

This is the backend of the note taking app. It provides a RESTful API for the frontend to interact with. The backend is built with NestJS and uses a PostgreSQL database.

## Technologies

- Node.js v20
- Yarn v1.22.22
- Docker v4.37.1
- NestJS v10.3.2
- PostgreSQL v14.3

## Installation

1. Clone the repository
2. Run `yarn install` to install the dependencies
3. Create a `.env` file in the root directory copying the contents of `.env.template` and filling in the values.
4. Run `docker-compose up` to start the container with PostgreSQL database.
5. Run `yarn start` to start the server.

## Usage

Initially the database will not be empty, because of the `init.sql` script that is run when the container is created. The script creates tables for `notes` and `categories`.

The server will be running on `http://localhost:3000`. You can use the following endpoints:

- `GET /notes` - Get all notes
- `GET /notes/:id` - Get a note by id
- `POST /notes` - Create a new note
- `PUT /notes/:id` - Update a note by id
- `DELETE /notes/:id` - Delete a note by id
- `GET /categories` - Get all categories
- `GET /categories/:id` - Get a category by id
- `POST /categories` - Create a new category
- `PUT /categories/:id` - Update a category by id
- `DELETE /categories/:id` - Delete a category by id

## Documentation

The API documentation can be found at `http://localhost:3000/api`. It is generated with Swagger and provides information about the endpoints and how to use them.

## Testing endpoints with Postman

You can import the Postman collection from the `postman` directory to test the endpoints.

## License

Copyright (c) 2025 Bryan Tapia. This project is [MIT licensed](LICENSE).
