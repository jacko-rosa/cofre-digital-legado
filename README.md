# Cofre Digital

## Project Overview
Cofre Digital is a secure digital vault designed to safeguard personal assets, providing users with a reliable and encrypted storage solution. The application ensures data integrity and confidentiality, making it ideal for managing sensitive information.    

## Architecture
Cofre Digital follows a Layered Architecture, which separates concerns into distinct layers for better organization and scalability.  

### Layer Responsibilities:
- **Controller:** Handles HTTP requests and responses, delegating business logic to the service layer.  
- **Service:** Contains the core business logic and orchestrates data flow between the controller and repository layers.  
- **Repository:** Manages data persistence and retrieval, interacting directly with the database.  

## Technologies Used
- Node.js  
- TypeScript  
- Express  
- MongoDB  
- ts-node  
- dotenv  

## Setup and Installation
1. Clone this repository
2. Navigate to the project directory: `cd cofre-digital-legado`  
3. Install dependencies: `npm install`  
4. Create a `.env` file with the following variables:  
    - `MONGO_URI`  
    - `PORT`  
5. Start the application: `npm start`  
