# Sushmitha Hebbar's Full-Stack Portfolio

## Overview

This is a professional portfolio showcasing my skills and projects as a **Full-Stack Developer** and **AI/ML Engineer**. It is built as a single repository containing two major components: a React-based frontend and a Node.js/Express backend that connects to MongoDB to manage and serve the project data.

The application is structured for easy deployment and development using the modern **MERN stack (MongoDB, Express, React, Node.js)**.

## Features

The portfolio showcases the following sections (as seen in `new-frontend/src/App.jsx`):

* **About Me**: A professional summary, role, and contact links (GitHub, LinkedIn).
* **Core Technical Skills**: Categorized skills covering Web Development, AI/ML, Databases, and Tools.
* **Certifications & Achievements**: Highlights educational milestones and certified courses.
* **Notable Projects**: Detailed descriptions of key projects like an "AI-Powered Mental Health Assistant," "SkillSync AI Task Allocation System," and "Blockchain-Based Evidence Tracker."

## Tech Stack

This project is organized into two main directories: `server` (backend) and `new-frontend` (frontend).

### 1. Frontend (`new-frontend`)

| Technology | Purpose | Version (from `package.json`) |
| :--- | :--- | :--- |
| **React** | User Interface | `^19.1.1` |
| **Vite** | Build Tooling | `^7.1.7` |
| **Tailwind CSS** | Styling | `^4.1.14` |
| **Lucide React** | Icons | `^0.545.0` |

### 2. Backend & Database (`server`)

| Technology | Purpose | Version (from `package.json`) |
| :--- | :--- | :--- |
| **Node.js/Express** | Server & API | `^5.1.0` |
| **Mongoose** | MongoDB Object Data Modeling (ODM) | `^8.19.1` |
| **CORS** | Cross-Origin Resource Sharing Middleware | `^2.8.5` |
| **dotenv** | Environment Variable Management | `^17.2.3` |
| **MongoDB Atlas** | Cloud Database (Connection via `MONGO_URI`) | N/A |

The API is exposed at `http://localhost:5000/api/data` and serves structured data for the portfolio sections.

## Installation & Local Setup

### Prerequisites

* Node.js (v18 or higher recommended)
* npm
* A MongoDB connection string (e.g., from MongoDB Atlas)

### Step 1: Clone the repository

Since the original error suggested your branch might be named `master` instead of `main`, ensure you navigate to the correct directory after cloning.

```bash
git clone [https://github.com/sushmithaHebbar/sushmitha_Portfolio.git](https://github.com/sushmithaHebbar/sushmitha_Portfolio.git)
cd sushmitha_Portfolio
