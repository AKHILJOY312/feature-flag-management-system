# Multi-Tenant Feature Flag Management System

## Overview

A SaaS-style feature flag management system with:

- Super Admin Application
- Organization Admin Application
- End User Application
- Node.js + Express Backend
- MongoDB Database
- JWT Authentication

## Features

### Super Admin

- Login with static credentials
- Create organizations
- View organizations

### Organization Admin

- Sign up
- Login
- Create feature flags
- Enable / Disable feature flags
- Delete feature flags

### End User

- Check whether a feature is enabled for an organization

---

# Tech Stack

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcrypt

## Frontend

- React
- Vite
- Tailwind CSS v4
- Axios
- React Hook Form
- Zod
- React Hot Toast

---

# Project Structure

feature-flag-management-system/

- backend/
- super-admin-app/
- admin-app/
- user-app/

---

# Environment Variables

Create a `.env` file inside `backend`:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/feature-flags
JWT_SECRET=your-secret-key
```

---

# Running the Backend

```bash
cd backend
npm install
npm run dev
```

Backend runs on:

```txt
http://localhost:5000
```

---

# Running Super Admin App

```bash
cd super-admin-app
npm install
npm run dev
```

Runs on:

```txt
http://localhost:5173
```

---

# Running Admin App

```bash
cd admin-app
npm install
npm run dev
```

Runs on:

```txt
http://localhost:5174
```

---

# Running User App

```bash
cd user-app
npm install
npm run dev
```

Runs on:

```txt
http://localhost:5175
```

---

# API Endpoints

## Authentication

```http
POST /api/auth/signup
POST /api/auth/login
```

## Organizations

```http
POST /api/organizations
GET /api/organizations
```

## Feature Flags

```http
POST /api/flags
GET /api/flags
PATCH /api/flags/:id
DELETE /api/flags/:id
POST /api/flags/check
```

---

# Assumptions

- Super Admin credentials are configuration-based.
- Feature flags are isolated per organization.
- JWT is used for authenticated routes.
- MongoDB is used as persistent storage.

---

# Submission Notes

This project was built to demonstrate:

- Multi-tenant architecture
- Role-based access control
- REST API design
- Repository-Service architecture
- Frontend form validation
- Feature flag management workflows
