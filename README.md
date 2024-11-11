# User Registration Project

## Overview
This project is a user registration application with a frontend interface and backend CRUD operations. It allows users to view, add, update, and delete user information, which includes Name, Email, and Date of Birth.

## Repository Structure
- **frontend**: Contains the HTML, CSS, and JavaScript files for the user interface.
- **backend**: Contains the backend API files for managing CRUD operations.

---

## Prerequisites
- **Node.js** and **npm** (for running the backend)
- A modern web browser (for running the frontend)

---

## Getting Started
### 1. Clone the Repository
To start, clone the repository to your local machine:
```bash
git clone https://github.com/kashishkedia/User-Registration-Project.git
```


---

## Running the Project

### Backend Setup
1. **Navigate to the backend directory**:
   ```bash
   cd User-Registration-Project/backend
   ```
2. **Install necessary packages**:
   ```bash
   npm install
   ```
3. **Start the backend server**:
   ```bash
   node server.js
   ```
4. The backend server should now be running at `http://localhost:5000`.

### Frontend Setup
1. **Navigate to the frontend directory**:
   ```bash
   cd ../frontend
   ```
2. **Open `index.html`** in a web browser:
   - Double-click `index.html` in the frontend folder to open it in your default browser.
   - Alternatively, you can right-click the file and select "Open With" to choose a specific browser.

---

## API Endpoints
Here are the backend API endpoints that allow interaction with the user data:

- **GET** `/users`: Fetch all registered users.
- **POST** `/users`: Add a new user. Requires a JSON object with `name`, `email`, and `dob` fields.
- **PUT** `/users/:id`: Update an existing user by ID. Requires a JSON object with updated `name`, `email`, and `dob` fields.
- **DELETE** `/users/:id`: Delete a user by ID.

---

## Usage
1. **Adding a User**: Use the form in the frontend to enter a new user’s information and click "Add User".
2. **Viewing Users**: Go to the "View Users" tab to see a list of registered users.
3. **Editing a User**: In the "View Users" tab, click "Edit" next to a user to modify their details inline, then click "Save".
4. **Deleting a User**: In the "View Users" tab, click "Delete" to remove a user from the list.

---

## Additional Notes
- Ensure the backend server is running at `http://localhost:5000` for the frontend to connect successfully.
- Both frontend and backend must be running on the same machine or network.

```

This README provides clear instructions for setting up and running both frontend and backend components, as well as descriptions of each functionality. Let me know if any specific adjustments are needed!