E-Commerce Web Application
Overview

This is a single-page e-commerce web application built with Node.js and React. It provides:

  User authentication (signup/login) with JWT

  CRUD APIs for items with filters (price, category)

  Add to cart and remove from cart functionality

  Cart items persist even after logging out

  Professional frontend with React components

Features
Backend

  Node.js with Express

  MongoDB as database

  Authentication APIs using JWT

  Item CRUD APIs with filters

  Cart APIs (add, remove, fetch items)

Frontend

  React.js

  Signup and Login pages

  Item Listing page with filters

  Cart page with add/remove items

  Persistent cart after logout

Project Structure
ecommerce/
├── backend/
│   ├── src/
│   │   ├── models/
│   │   │   ├── User.js
│   │   │   ├── Item.js
│   │   │   └── Cart.js
│   │   ├── routes/
│   │   │   ├── authRoutes.js
│   │   │   ├── itemRoutes.js
│   │   │   └── cartRoutes.js
│   │   ├── middleware/
│   │   │   └── auth.js
│   │   ├── config/
│   │   │   └── db.js
│   │   ├── app.js
│   │   └── server.js
│   └── package.json
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── Navbar.js
    │   │   ├── ItemCard.js
    │   │   └── Filter.js
    │   ├── pages/
    │   │   ├── Listing.js
    │   │   ├── Cart.js
    │   │   ├── Signup.js
    │   │   └── Login.js
    │   ├── services/
    │   │   └── api.js
    │   └── App.js
    └── package.json

Installation
Backend
# Go to backend folder
cd backend

# Install dependencies
npm install

# Create a .env file
touch .env


Add environment variables in .env:

PORT=5000
MONGO_URI=<your-mongodb-uri>
JWT_SECRET=<your-jwt-secret>

# Start backend server
npx nodemon src/server.js

Frontend
# Go to frontend folder
cd frontend

# Install dependencies
npm install

# Start frontend server
npm start


Frontend runs on http://localhost:3000

Backend runs on http://localhost:5000

API Endpoints
Auth
Method	Endpoint	Description
POST	/api/auth/signup	Register a new user
POST	/api/auth/login	Login and get JWT
Items
Method	Endpoint	Description
GET	/api/items	Get all items (with optional filters)
POST	/api/items	Create a new item
PUT	/api/items/:id	Update an item
DELETE	/api/items/:id	Delete an item
Cart
Method	Endpoint	Description
GET	/api/cart	Get user cart items
POST	/api/cart	Add item to cart
DELETE	/api/cart/:itemId	Remove item from cart

Frontend Features

Navbar with login/logout and cart link

Listing Page with filters by category and price

Cart Page with item cards, remove functionality, and total price

Technologies Used

Backend: Node.js, Express, MongoDB, Mongoose, JWT, bcrypt

Frontend: React.js, Axios, React Router, CSS

Dev Tools: Nodemon, VS Code
