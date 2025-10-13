# Anythink Market

This project contains two backend servers: a FastAPI server implemented in Python and a Node.js Express server.

## Project Structure

The project has the following files and directories:

### Python Server

- `python-server/src/main.py`: This file contains the implementation of the FastAPI server with two routes. It handles adding a task to a list and retrieving the list.

- `python-server/src/__init__.py`: This file is an empty file that marks the `src` directory as a Python package.

- `python-server/requirements.txt`: This file lists the dependencies required for the FastAPI server and other dependencies.

- `python-server/Dockerfile`: This file is used to build a Docker image for the FastAPI server. It specifies the base image, copies the source code into the image, installs the dependencies, and sets the command to run the server.

### Node.js Server

- `node-server/index.js`: This file contains the implementation of a simple Express server with no endpoints, listening on port 8001.

- `node-server/package.json`: This file lists the dependencies required for the Node.js server, including Express and nodemon for live reload during development.

- `node-server/Dockerfile`: This file is used to build a Docker image for the Node.js server. It specifies the base image, copies the source code into the image, installs the dependencies, and sets the command to run the server with nodemon.

### Docker Compose

- `docker-compose.yml`: This file is used to define and run multi-container Docker applications. It specifies both the Python and Node.js services to run, their configurations, and mounts source directories as volumes for live code updates during development.

## Getting Started

To run both servers using Docker, follow these steps:

- Build and start the Docker containers by running the following command:

  ```shell
  docker compose up
  ```

  This command will build the Docker images for both servers and start the containers defined in the `docker-compose.yml` file.

- The servers should now be running:
  - **Python FastAPI server** on port `8000`
  - **Node.js Express server** on port `8001`

Both services mount their source directories as volumes, enabling live code updates during development.

## API Routes

### Python FastAPI Server

The FastAPI server (port 8000) provides the following API routes:

- `POST /tasks`: Adds a task to the task list. The request body should contain the task details.

- `GET /tasks`: Retrieves the task list.

### Node.js Express Server

The Node.js Express server (port 8001) is a simple server with no endpoints currently configured.
