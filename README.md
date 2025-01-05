# Note Taking App

This is a simple note-taking app that allows users to create, edit, delete, archive, and unarchive notes. The app is divided into two parts: the frontend and the backend. The frontend is built with React and the backend is built with NestJS.

## Technologies

### Frontend

- Node.js v20
- Yarn v1.22.22
- React v18.3.1
- React Router v7.1.1
- Axios v1.7.9
- Date-fns v4.1.0
- Shadcn/ui

### Backend

- Node.js v20
- Yarn v1.22.22
- NestJS v10.3.2
- PostgreSQL v14.3

## Installation

1. Clone the repository.
2. Run `yarn install` in the frontend directory to install the frontend dependencies.
3. Run `yarn install` in the backend directory to install the backend dependencies.
4. Create a `.env` file in the frontend directory and copy the contents of `.env.template` into it.
5. Create a `.env` file in the backend directory and copy the contents of `.env.template` into it.
6. Complete the `.env` files with the appropriate values.
7. Run `docker-compose up` in the backend directory to start the PostgreSQL database.
8. Run `yarn start` in the backend directory to start the backend server.
9. Run `yarn build` in the frontend directory to build the frontend project.
10. Run `yarn preview` in the frontend directory to start the frontend server.

## Usage

The frontend server will be running on `http://localhost:4173`.
The backend server will be running on `http://localhost:3000`.

To get detailed information about the endpoints and how to use them, visit `http://localhost:3000/api`.

## Starting the entire app using an script

You can start the entire app using the `start` script in the root directory. This script will start the PostgreSQL database, the backend server, and the frontend server.

You need to give the script execution permissions by running `chmod +x start.sh` in the root directory.

After that, you can run the script by running `./start.sh` in the root directory.

## Documentation

Every project, backend and frontend, has its own README file with detailed information about the project. You can find them in the `backend` and `frontend` directories.

## Features

This app allows users to:

- Create, Read, Update, and Delete notes.
- Archive and unarchive notes.

## License

Copyright (c) 2025 Bryan Tapia. This project is [MIT licensed](LICENSE).
