# Decorvista Backend (Express + MongoDB)

## Features
- Auth (register/login/me) with JWT
- Designs, Products, Designers CRUD
- Consultations CRUD (user/designer endpoints)
- Reviews (create, list by product/designer)
- Blogs (admin CRUD)

## Setup
1. Copy `.env.example` to `.env` and set `MONGO_URI` and `JWT_SECRET`.
2. `npm install`
3. `npm run dev` (requires nodemon) or `npm start`

## Notes
- This project provides baseline controllers and routes; validate inputs and add production hardening as needed.
