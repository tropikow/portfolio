# Backend Portfolio API

This is an **open-source, backend-focused portfolio project** built to simulate a real-world backend application using Node.js and MongoDB.  
The goal of this repository is to demonstrate backend engineering skills such as API design, business rule modeling, database integration, and clean architecture.

This project is intentionally designed as a **reference backend**: by using the same database schema, collection names, and environment variables, anyone can quickly spin up a functional backend that represents their own skills, experiences, and projects.

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
- **MongoDB**
- **REST API**
- **Environment-based configuration**

---

## 🔓 Open Source Usage

This project is **open source** and free to use.

You are encouraged to:
- Fork it
- Modify it
- Adapt it to your own portfolio or backend experiments

As long as you keep the same database schema and environment variables, you will have a ready-to-use backend to expose your own profile, experiences, skills, and documentation.

---

## 🗄️ Setting up MongoDB

### 1. Create a MongoDB Database

You can use either:

**Option A: MongoDB Atlas (Cloud - Recommended)**

1. Go to **MongoDB Atlas**:  
   👉 https://www.mongodb.com/cloud/atlas
2. Create an account (if you don't have one).
3. Click **"Build a Database"**
4. Choose:
   - Free tier (M0)
   - Cloud provider and region
   - Cluster name
5. Wait for the cluster to be provisioned.

📚 Official documentation:  
- https://www.mongodb.com/docs/atlas/getting-started/

**Option B: Local MongoDB Installation**

1. Download MongoDB from:  
   👉 https://www.mongodb.com/try/download/community
2. Install and start MongoDB locally
3. Default connection: `mongodb://localhost:27017`

📚 Official documentation:  
- https://www.mongodb.com/docs/manual/installation/

---

### 2. Create the Database Schema

Once the database is ready:

1. Create a database (e.g., `portfolio`)
2. Create collections using the schema defined in this project  
   (profiles, experiences, contacts, docs, etc.).

⚠️ **Important**  
To use this backend as intended, keep:
- The same collection names
- The same document structure
- The same field names

This ensures the API works without additional configuration.

📚 MongoDB documentation:  
- https://www.mongodb.com/docs/manual/core/databases-and-collections/

---

### 3. Get MongoDB Connection String

**For MongoDB Atlas:**

1. Go to **Database → Connect**
2. Choose **"Connect your application"**
3. Copy the connection string
4. Replace `<password>` with your database user password

**For Local MongoDB:**

Use: `mongodb://localhost:27017/portfolio`

📚 Connection strings guide:  
- https://www.mongodb.com/docs/manual/reference/connection-string/

---

## 🔐 Environment Variables Configuration

Create a `.env` file in the root of the project:

```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio
PORT=3000

📌 Notes:

Never commit .env files

A .env.example file should be used as reference

▶️ Running the Project Locally
npm install
npm run dev

📡 API Overview

Available endpoints:

GET /about
Returns profile information (name, summary, links).

GET /experiences
Returns work experiences or projects linked to the profile.

GET /contact
Returns contact information and social links.

GET /doc
Returns documentation and resources.

These endpoints are backed directly by the MongoDB database.

🧠 How to Use This as Your Own Backend Portfolio

Fork this repository

Create your own MongoDB database (Atlas or local)

Recreate the same database schema and collections

Configure your .env with your MongoDB connection string

Insert your own data (profile, experiences, contacts, docs)

You will instantly have:

A functional backend

A database-driven portfolio API

A strong backend reference project

📄 License

This project is licensed under the MIT License.
You are free to use, modify, and distribute it.

📚 References

MongoDB Documentation
https://www.mongodb.com/docs/

MongoDB Node.js Driver
https://www.mongodb.com/docs/drivers/node/current/

MongoDB Atlas
https://www.mongodb.com/cloud/atlas

✍️ Author

Built as a personal backend portfolio project to demonstrate real-world backend engineering practices.