# Library Management System

This is a simple Library Management System built using React.js and json-server. The system allows librarians to manage books and users, and users to borrow and return books while tracking the borrowing history.

## Features

- Add, edit, and delete books
- Add, edit, and delete users
- Borrow books
- Return books
- Display borrowing history

## Requirements

- Node.js (>= 12.0.0)
- npm (>= 6.0.0)

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/library-management-system.git
cd library-management-system


## install Dependencies
-npm install
-npm install -g json-server
-start the json server in the terminal(or command prompt) of the folder =>json-server --watch db.json --port 3001
-start the react app =>npm start

##Routes
/ : Home
/books : List of books
/users : List of users
/history : Borrowing history
/borrow : Borrow a book
/return : Return a book


##JSON Server Endpoints
GET /books : Get all books
POST /books : Add a new book
PUT /books/:id : Update a book
DELETE /books/:id : Delete a book
GET /users : Get all users
POST /users : Add a new user
PUT /users/:id : Update a user
DELETE /users/:id : Delete a user
GET /borrowingHistory : Get borrowing history
POST /borrowingHistory : Add a borrowing record
PUT /borrowingHistory/:id : Update a borrowing record
