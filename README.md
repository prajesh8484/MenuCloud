# MenuCloud

<p align="center">
<a href="https://github.com/prajesh8484/MenuCloud"><img src="https://img.shields.io/github/languages/code-size/prajesh8484/MenuCloud"></a>
<a href="https://github.com/prajesh8484/MenuCloud/commits"><img src="https://img.shields.io/github/last-commit/prajesh8484/MenuCloud"></a>
</p>

## Description
**MenuCloud** is a digital menu platform built with **MERN Stack, It allows restaurant owners to create, manage, and share digital menus via unique QR codes for a seamless guest experience.

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Features](#features)

## Installation
### Steps

1. **Clone the Repository**  
   ```sh
   git clone https://github.com/prajesh8484/MenuCloud.git
   ```

2. **Navigate to the Project Directory**  
   ```sh
   cd MenuCloud
   ```

3. **Install Dependencies (Backend & Frontend)**  
   ```sh
   # Install Backend Dependencies
   cd backend
   npm install

   # Install Frontend Dependencies
   cd ../frontend
   npm install
   ```

4. **Environment Setup**  
   Create a `.env` file in the `backend` folder with the following credentials:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   ```

5. **Start the Development Servers**  
   You will need to run the backend and frontend servers concurrently.

   **Backend:**
   ```sh
   cd backend
   npm run start
   ```

   **Frontend:**
   ```sh
   cd frontend
   npm run dev
   ```

6. **Open the Project in a Browser**  
   Open your browser and go to [http://localhost:5173](http://localhost:5173) to view the project.  

# Features
- **Dynamic Menu Management** – Perform real-time CRUD operations and manage cloud-hosted image uploads seamlessly via Cloudinary.
- **Secure Authentication** – Robust JWT-based admin system ensuring protected access and data security.
- **Smart Connectivity** – Automatically generates unique restaurant URLs and QR codes for instant, hassle-free customer access.
- **React Admin Dashboard** – A streamlined interface for effortless menu editing and restaurant profile management.
- **Responsive Public View** – Beautiful, mobile-optimized menu page for a superior guest experience.
