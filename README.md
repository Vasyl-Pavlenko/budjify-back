# Budjify Backend

Welcome to the Budjify backend repository! This repository contains the backend code for the Budgify application. This is the server-side implementation for an application that helps in tracking expenses and income. It is built using Nest.js, a progressive Node.js framework.

## Prerequisites

Before you begin, make sure you meet the following requirements:

- Node.js (v14 or higher)
- npm (Node Package Manager)
- PostgreSQL

## Getting Started

1. Clone the repository to your local machine:

```bash
git https://github.com/Vasyl-Pavlenko/budjify-back.git
cd budjify-back
npm install
npm run start:dev
```

2. Set up the database:

### Create a PostgreSQL account database and update with your credentials:
 #### host: configService.get('DB_HOST'),
 #### port: configService.get('DB_PORT'),
 #### username: configService.get('DB_USERNAME'),
 #### password: configService.get('DB_PASSWORD'),
 #### database: configService.get('DB_NAME'),

3. The server will start on the specified port (default: 3001) and will be ready to handle API requests.

## Features
#### User authentication (registration, login)
#### CRUD operations for Categories
#### Create ande delete transactions

## API Endpoints
### Authentication:
#### POST /api/auth/registration: Register a new user.
#### POST /api/auth/login: Login with existing user credentials.
#### GET /api/auth/me: Retrieve user information (requires authentication).

### Categories:
#### POST /api/categories: Create a new category (requires authentication).
#### GET /api/categories: Retrieve all category.
#### PATCH /api/categories/category/:id: Update a category (requires authentication).
#### DELETE /api/categories/category/:id: Delete a category (requires authentication).

### Transactions:
#### POST /api/transactions: Create a new transaction (requires authentication).
#### GET /api/transactions: Retrieve all transactions.
#### DELETE /api/transactions/transaction/:id: Delete a transaction (requires authentication).


## Contributing
Contributions are welcome! If you find any issues or want to enhance the project, feel free to create a pull request. Please ensure your code follows best practices and includes appropriate tests.

