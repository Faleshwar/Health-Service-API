# Node.js Health Service API

## Overview

This Node.js API provides endpoints for health services. It connects to a MongoDB database to store and retrieve service information.


## Tech Stack

- **Node.js**: JavaScript runtime for building the server.
- **Express.js**: Web application framework for Node.js.
- **MongoDB**: NoSQL database for storing service data.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js.
- **dotenv**: Module to load environment variables from a `.env` file.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- Node.js (version 22 or higher)
- npm (comes with Node.js)
- MongoDB (for local development) or a MongoDB Atlas account (for a cloud-based database)




## Installation

1. **Clone the Repository**

   Clone the repository to your local machine and navigate into the project directory:

   `git clone https://github.com/Faleshwar/Health-Service-API.git`
   
   `cd healthserviceapi`

2. **Install Dependencies**

   Install the required npm packages by running:

   `npm install`

3. **Set Up Environment Variables**

   Create a `.env` file in the root directory of your project. Add your MongoDB connection URL to this file.

   Here’s a sample `.env` file:

    `DB_URL=mongodb://localhost:27017/your-database-name`

If you are using MongoDB Atlas, the URL will look something like this:

`DB_URL=mongodb+srv://<username>:<password>@cluster0.mongodb.net/your-database-name?retryWrites=true&w=majority`


4. **Run the Application**

To start the application, use the following command:

`npm start`

5. **Access the API**

Once the server is running, you can access the API at `http://localhost:8080`.

## API Endpoints

- **POST** `/service/add`  
Add a new service. Requires a JSON body with `name`, `description`, and `price`.

- **GET** `/service`  
Retrieve a service by ID. Requires a query parameter `id`.

- **GET** `/service/all`  
Retrieve all services.

- **PUT** `/service/update`  
Update a service by ID. Requires a query parameter `id` and a JSON body with updated `name`, `description`, and `price`.

- **DELETE** `/service/delete`  
Delete a service by ID. Requires a query parameter `id`.

Use tools like Postman or `curl` to interact with these endpoints.

## Troubleshooting

- **Database Connection Issues**: Ensure MongoDB is running and accessible. Verify that the `.env` file contains the correct MongoDB URL.
- **Application Crashes or Errors**: Check the console for any error messages. Ensure all dependencies are installed and up-to-date.