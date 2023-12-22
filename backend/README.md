# SastoDeal

Welcome to SastoDeal - your ultimate destination for great deals!

## Backend Setup

Backend is powered by Node.js, Express, and MongoDB/Mongoose. Follow these simple steps to set up the backend and start integrating it with the frontend.

### Getting Started

1. **Clone the Repository**

   ```bash
   git clone https://github.com/shree404/SastoDeal-revamp
   ```

2. **Navigate to the Backend Directory**

   ```bash
   cd SastoDeal-revamp/backend
   ```

3. **Install Dependencies**

   ```bash
   npm install
   ```

4. **Set Environment Variables**

   Create a `.env` file in the `backend` directory and configure the following variables:

   ```
   PORT=3000            # Port on which the server will run
   MONGO_URI=<your-mongo-db-uri> # Your MongoDB connection URI
   JWT_SECRET=<your-secret-key> # Secret key for JWT
   JWT_EXPIRE=30d        # JWT token expiration time (e.g., 30 days)
   ```

### Features

Our backend provides the following features:

- **User Account**

  - **Register a New User**

    - Endpoint: `POST /api/user/register`
    - JSON Payload:
      ```json
      {
        "firstname": "YourFirstName",
        "lastname": "YourLastName",
        "email": "your.email@example.com",
        "password": "YourPassword",
        "phone": 1234567890
      }
      ```

  - **User Login**
    - Endpoint: `GET /api/user/login`
    - JSON Payload:
      ```json
      {
        "email": "your.email@example.com",
        "password": "YourPassword"
      }
      ```

### Running the Server

Once everything is set up, run the server:

```bash
npm run server
```

Now, your backend is up and running on the specified port!
