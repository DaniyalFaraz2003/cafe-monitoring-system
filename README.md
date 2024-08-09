
# Café Monitoring System Setup Guide

## Step 1: Setting up the Project

### 1.1. Clone the Repository

1. Create a new folder for your project.
2. Open the folder in Visual Studio Code (VS Code).
3. Open the VS Code terminal and run the following command to clone the repository:

```bash
git clone https://github.com/DaniyalFaraz2003/cafe-monitoring-system.git
```

### 1.2. Open Terminals

1. Open two separate terminals in VS Code.

### 1.3. Navigate to Frontend Directory

1. In the first terminal, navigate to the `Frontend` directory:

```bash
cd Frontend
```

### 1.4. Navigate to Backend Directory

1. In the second terminal, navigate to the `Backend` directory:

```bash
cd Backend
```

## Step 2: Setting up the Frontend

### 2.1. Install Dependencies

1. In the terminal where you navigated to the `Frontend` folder, run the following commands to install dependencies and start the development server:

```bash
npm install
npm run dev
```

## Step 3: Setting up the Backend

### 3.1. Install Dependencies

1. In the terminal where you navigated to the `Backend` folder, run the following commands to install dependencies and start the backend server:

```bash
npm install
npm start
```

## Step 4: Setting up the Database

### 4.1. Install MySQL Workbench

1. Install MySQL Workbench. Follow the installation guide provided at the following link:
   [MySQL Workbench Installation Guide](https://dev.mysql.com/downloads/workbench/)

### 4.2. Create a New Schema

1. Open MySQL Workbench.
2. Create a new schema for your project.

### 4.3. Import Database Schema

1. Open the `cafe_project.sql` file located in the `Backend/db` directory.
2. Copy the contents of the file.
3. Paste the copied contents into the SQL query editor of your new schema in MySQL Workbench.
4. Run all the queries to set up the database.

### 4.4. Configure Database Connection

1. Open the `config.js` file located in the `/Backend/db/` directory.
2. Enter your local host password for MySQL Workbench in the `password` property of the connection function.

```javascript
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'your_username',
  password: 'your_password',
  database: 'your_database_name'
});
```

### 4.5. Restart Backend Server

1. In the terminal where you navigated to the `Backend` folder, run the following commands to ensure all dependencies are installed and start the backend server:

```bash
npm install
npm start
```

## Step 5: Accessing the Application

1. After you see a successful connection message in the backend terminal console, navigate to the following URL in your web browser:
   [http://localhost:5173](http://localhost:5173)

2. Alternatively, click on the link provided in the frontend terminal to open the application.

## Additional Points

- Ensure that you have Node.js and npm installed on your system.
- Make sure MySQL server is running on your local machine.
- If there are any issues with starting the servers, check for error messages in the terminal and resolve dependencies or configuration issues as indicated.
- Regularly update your dependencies to the latest versions to avoid security vulnerabilities and compatibility issues.

By following these detailed steps, you should be able to set up and run your Café Monitoring System successfully. If you encounter any issues, refer to the error messages in your terminal or consult the documentation for the specific tools and libraries you are using.
