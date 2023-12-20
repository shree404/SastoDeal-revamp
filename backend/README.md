# Sastodeal

- **Backend**: Node, Express, MongoDB/Mongoose

## Features

- User Account
  - Register
  ```bash
  POST : /api/user/register
  JSON : {
    "firstname": "Ram",
    "lastname": "Prasad",
    "email": "ramprasad@gmail.com",
    "password": "Ram123",
    "phone": 1234567890
  }
  ```

````
  - login
  ```bash
  GET : /api/user/login
  JSON : {
    "email": "ramprasad@gmail.com",
    "password": "Ram123"
}
````

## Run Locally

- Clone repo

```bash
  git clone https://github.com/shree404/SastoDeal-revamp
```

- Server
  - env variables: PORT, MONGO_URI, JWT_SECRET, JWT_EXPIRE
  - ```
      cd SastoDeal-revamp/backend
      npm install
      npm run server
    ```
