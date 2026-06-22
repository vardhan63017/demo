# Demo - Backend Practice

A simple Express.js practice project showing basic middleware, authentication checks, and routes.

Prerequisites
- Node.js

Install
- npm install

Run
- node server.js

Routes
- GET / — public route
- POST /login — login route (example credentials: email: `vardhan@gmail.com`, password: `123`) returns a token `affordmed123`
- GET /dashboard — protected route; send header `Authorization: Bearer affordmed123`
- GET /profile — protected route; send header `Authorization: Bearer affordmed123`

Keep it simple and small — this repo is for practice and learning.