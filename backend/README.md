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

Our backend provides a comprehensive set of features for managing users, products, categories, brands, and coupons. Below is an overview of the main categories in your API:

### User

- **All Users**

  - Retrieve a list of all users.

  ```
  GET - localhost:5000/api/user/users
  ```

- **A User**

  - Retrieve information about a specific user.

  ```
  GET - localhost:5000/api/user/:id
  ```

- **Register**

  - Register a new user.

  ```
  POST - localhost:5000/api/user/register
  ```

- **Login**

  - Authenticate a user.

  ```
  POST - localhost:5000/api/user/login
  ```

- **Admin Login**

  - Authenticate an admin user.

  ```
  POST - localhost:5000/api/user/admin-login
  ```

- **Logout**
  - Log out a user.
  ```
  GET - localhost:5000/api/user/logout
  ```

### Product

- **Create Product**

  - Add a new product.
  - Require `refreshToken` of admin

  ```
  POST - localhost:5000/api/product/wishlist
  ```

- **Get a Product**

  - Retrieve information about a specific product.

  ```
  GET - localhost:5000/api/product/:id
  ```

- **Delete a Product**

  - Remove a product.
  - Require `refreshToken` of admin

  ```
  DELETE - localhost:5000/api/product/:id
  ```

- **Update a Product**
  - Modify product details.
  - Require `refreshToken` of admin
  ```
  PUT - localhost:5000/api/product/:id
  ```

- **Ratings**

  - Add ratings and comments to a product.

- **Get All Products**

  - Retrieve a list of all products.

- **Query**

  - Filter products based on price range.

- **Sorting**

  - Sort products based on specified criteria.

- **Fields Limit**
  - Retrieve products with limited fields.

### Category

- **Create Category**

  - Add a new product category.

- **Update Category**

  - Modify category details.

- **Delete Category**

  - Remove a product category.

- **Get a Category**

  - Retrieve information about a specific category.

- **Get All Categories**
  - Retrieve a list of all categories.

### Brand

- **Create Brand**

  - Add a new brand.

- **Update Brand**

  - Modify brand details.

- **Delete Brand**

  - Remove a brand.

- **Get a Brand**

  - Retrieve information about a specific brand.

- **Get All Brands**
  - Retrieve a list of all brands.

### Coupon

- **Create Coupon**

  - Add a new coupon.

- **Update Coupon**

  - Modify coupon details.

- **Delete Coupon**

  - Remove a coupon.

- **Get a Coupon**
  - Retrieve information about a specific coupon.

The collection includes various authentication methods such as bearer tokens for user and admin access to secure the endpoints.

### Running the Server

Once everything is set up, run the server:

```bash
npm run server
```

Now, your backend is up and running on the specified port!

For frontend integration, make API calls to the provided endpoints, such as `router.post("/register", createUser);`, `router.post("/login", loginUserCtrl);`, etc.
