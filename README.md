# Backend Portfolio API

This is an **open-source, backend-focused portfolio project** built to simulate a real-world backend application using Node.js and Supabase.  
The goal of this repository is to demonstrate backend engineering skills such as API design, business rule modeling, database integration, and clean architecture.

This project is intentionally designed as a **reference backend**: by using the same database schema, table names, and environment variables, anyone can quickly spin up a functional backend that represents their own skills, experiences, and projects.

---

## 🚀 Project Purpose

- Showcase backend development skills through a real, database-driven API
- Demonstrate clean architecture, service layers, and structured data modeling
- Provide a reusable backend template for developers to expose their own portfolio data
- Serve as a learning and reference project for backend best practices

This is a **personal project**, not intended for production use, but built following professional backend standards.

---

## 🧩 Tech Stack

- **Node.js**
- **TypeScript**
- **Supabase (PostgreSQL)**
- **REST API**
- **Environment-based configuration**

---

## 🔓 Open Source Usage

This project is **open source** and free to use.

You are encouraged to:
- Fork it
- Modify it
- Adapt it to your own portfolio or backend experiments

As long as you keep the same database schema and environment variables, you will have a ready-to-use backend to expose your own profile, experiences, and skills.

---

## 🗄️ Setting up Supabase

### 1. Create a Supabase Project

1. Go to **Supabase**:  
   👉 https://supabase.com/
2. Create an account (if you don’t have one).
3. Click **“New Project”**
4. Choose:
   - Organization
   - Project name
   - Database password
   - Region
5. Wait for the project to be provisioned.

📚 Official documentation:  
- https://supabase.com/docs/guides/getting-started

---

### 2. Create the Database Schema

Once the project is created:

1. Go to **Database → SQL Editor**
2. Create the tables using the schema defined in this project  
   (profiles, experiences, skills, etc.).

⚠️ **Important**  
To use this backend as intended, keep:
- The same table names
- The same column names
- The same data types

This ensures the API works without additional configuration.

📚 Supabase SQL guide:  
- https://supabase.com/docs/guides/database

---

### 3. Get Supabase Credentials

Go to:

**Settings → API**

You will need:

- **Project URL**
- **anon public key**

These values are required to connect the backend to Supabase.

📚 API keys documentation:  
- https://supabase.com/docs/guides/api

---

## 🔐 Environment Variables Configuration

Create a `.env` file in the root of the project:

```env
SUPABASE_URL=https://your-project-id.supabase.co
SUPABASE_ANON_KEY=your-anon-public-key
PORT=3000

📌 Notes:

Never commit .env files

A .env.example file should be used as reference

▶️ Running the Project Locally
npm install
npm run dev

📡 API Overview

Example endpoints:

GET /about
Returns profile information (name, summary, links).

GET /experiences
Returns work experiences or projects linked to the profile.

These endpoints are backed directly by the Supabase database.

🧠 How to Use This as Your Own Backend Portfolio

Fork this repository

Create your own Supabase project

Recreate the same database schema

Configure your .env

Insert your own data (profile, experiences, skills)

You will instantly have:

A functional backend

A database-driven portfolio API

A strong backend reference project

📄 License

This project is licensed under the MIT License.
You are free to use, modify, and distribute it.

📚 References

Supabase Documentation
https://supabase.com/docs

Supabase JavaScript Client
https://supabase.com/docs/reference/javascript/introduction

PostgreSQL Documentation
https://www.postgresql.org/docs/

✍️ Author

Built as a personal backend portfolio project to demonstrate real-world backend engineering practices.