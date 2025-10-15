# Anythink Market

This project contains both a Python FastAPI server and a Node.js Express server for managing a task list. We are currently migrating from Python to Node.js for improved performance and scalability.

## Project Structure

The project has the following files and directories:

### Python Server (Legacy)

- `python-server/src/main.py`: Contains the FastAPI server implementation with task management routes.

- `python-server/src/__init__.py`: Empty file that marks the `src` directory as a Python package.

- `python-server/requirements.txt`: Lists the dependencies required for the FastAPI server.

- `python-server/Dockerfile`: Docker configuration for building and running the Python server.

### Node.js Server (Current)

- `node-server/index.js`: Contains the Express server implementation with all migrated endpoints.

- `node-server/package.json`: Defines project dependencies (Express, Nodemon) and scripts.

- `node-server/Dockerfile`: Docker configuration for building and running the Node.js server.

### Docker Configuration

- `docker-compose.yml`: Defines and runs both Python and Node.js servers as multi-container Docker application.

## Getting Started

To run both servers using Docker, follow these steps:

1. Build and start the Docker containers by running the following command:

   ```shell
   docker compose up
   ```

   This command will build the Docker images for both servers and start the containers defined in the `docker-compose.yml` file.

2. Both servers should now be running:
   - **Python server** (legacy): Available at `http://localhost:8000`
   - **Node.js server** (current): Available at `http://localhost:8001`

## Migration Status

We are actively migrating from Python (FastAPI) to Node.js (Express) for better performance and scalability. 

✅ **Completed:**
- All Python endpoints have been migrated to Node.js
- Both servers are running side-by-side for compatibility
- Feature parity achieved between both implementations

🔄 **Next Steps:**
- Phase out the Python server once migration is validated
- Update docker-compose.yml to use only Node.js server

## API Routes

Both servers provide the following API routes:

### Python Server (Port 8000)
- `GET /`: Returns "Hello World"
- `POST /tasks`: Adds a task to the task list. The request body should contain `{"text": "your task"}`.
- `GET /tasks`: Retrieves the task list in JSON format.

### Node.js Server (Port 8001) - **Recommended**
- `GET /`: Returns "Hello World"
- `POST /tasks`: Adds a task to the task list. The request body should contain `{"text": "your task"}`.
- `GET /tasks`: Retrieves the task list in JSON format.

### Example Usage

```bash
# Get all tasks (Node.js server)
curl http://localhost:8001/tasks

# Add a new task (Node.js server)
curl -X POST http://localhost:8001/tasks \
  -H "Content-Type: application/json" \
  -d '{"text": "Build a rocket ship"}'
```
