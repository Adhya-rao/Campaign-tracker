# Campaign Tracker

Hey there! 👋 Welcome to the **Campaign Tracker** web app. This is a simple yet functional tool I built as part of a **technical round assignment for Ginger Media Company**. It's designed to help track marketing campaigns in real-time, allowing users to add, view, update, and manage campaign statuses effortlessly. Think of it as a mini dashboard for campaign management – perfect for keeping things organized without the complexity.

## Features

* **User Authentication**: Secure login and registration system using JWT tokens.
* **Campaign Management**: Add new campaigns with details like name, client, start date, and status.
* **View Campaigns**: See all campaigns in a clean, responsive list.
* **Update Status**: Easily change campaign status to Active, Paused, or Completed.
* **Delete Campaigns**: Remove campaigns when they're no longer needed.
* **Dashboard Summary**: A quick overview showing the number of active campaigns and more.
* **Responsive UI**: Works great on desktop and mobile devices.

## Tech Stack

* **Frontend**: React (with hooks, routing via React Router), Axios for API calls, and some CSS for styling.
* **Backend**: Node.js with Express.js for the server, JWT for authentication, and Bcrypt for password hashing.
* **Database**: MongoDB for persistent storage – we're using the "Ginger" database here.

## Prerequisites

Before you dive in, make sure you have:

* Node.js (version 14 or higher) installed on your machine.
* MongoDB running locally (default on port 27017).
* npm (comes with Node.js) for managing dependencies.

* result

* HOME PAGE

* <img width="1888" height="815" alt="Image" src="https://github.com/user-attachments/assets/d7241c50-daab-43f2-868d-7a694621dda2" />

<img width="890" height="856" alt="Image" src="https://github.com/user-attachments/assets/00e39f8b-b88d-4075-b361-1f95401cc7aa" />
*LOGIN 
<img width="1909" height="866" alt="Image" src="https://github.com/user-attachments/assets/2f63b9be-ed77-46bc-879a-1a293da0ef74" />
*REGISTER
<img width="704" height="711" alt="Image" src="https://github.com/user-attachments/assets/0e4f8992-09ec-4b91-a0cd-fee30a1fde37" />
*DASHBOARD

<img width="1904" height="853" alt="Image" src="https://github.com/user-attachments/assets/7abe855b-91ce-4071-a334-6ef354b7beba" />

*CAMPAIGN LIST
<img width="1910" height="706" alt="Image" src="https://github.com/user-attachments/assets/b4a9e999-8a2a-4972-9d47-bb974c9ed67a" />

*SORTING

<img width="1891" height="692" alt="Image" src="https://github.com/user-attachments/assets/54f0a494-885c-47e3-b21e-7e2912f002e3" />
*ADD CAMPAIGN



<img width="1884" height="829" alt="Image" src="https://github.com/user-attachments/assets/525046bb-08ae-477c-862f-0bd085546013" />

## Installation and Setup

Let’s get this up and running! Follow these steps:

1. **Clone the Repository**:

   ```bash
   git clone <your-repo-url>
   cd campaign-tracker
   ```

2. **Backend Setup**:

   * Navigate to the backend folder:

     ```bash
     cd backend
     ```
   * Install dependencies:

     ```bash
     npm install
     ```
   * Create a `.env` file in the `backend` directory and add your JWT secret:

     ```bash
     JWT_SECRET=your_super_secret_jwt_key_here
     ```
   * Start the backend server:

     ```bash
     npm run dev
     ```

     The server will run on `http://localhost:5000`.

3. **Frontend Setup**:

   * Open a new terminal and navigate to the client folder:

     ```bash
     cd client
     ```
   * Install dependencies:

     ```bash
     npm install
     ```
   * Start the React app:

     ```bash
     npm start
     ```

     The app will open in your browser at `http://localhost:3000`.

4. **Database**:

   * Ensure MongoDB is running locally.
   * The app connects to the **“Ginger”** database automatically. It uses two collections:

     * `campaigns`: Stores all campaign details (name, client, start date, status).
     * `users`: Stores user information for authentication.

That’s it! Your app should be live and ready to use.

## Usage

* **Home Page**: Start here for a quick intro.
* **Login/Register**: Create an account or log in to access the dashboard.
* **Dashboard**: View your campaigns, add new ones, update statuses, or delete as needed. The summary at the top gives you a quick glance at active campaigns.
* **Adding a Campaign**: Fill in the form with campaign name, client name, start date, and initial status.
* **Managing Campaigns**: Click on actions in the list to edit or remove.

## API Endpoints

For the tech-savvy, here’s a quick rundown of the backend APIs:

* **Authentication**:

  * `POST /api/auth/register` - Register a new user.
  * `POST /api/auth/login` - Log in and get a JWT token.

* **Campaigns** (all require authentication):

  * `GET /api/campaigns` - Fetch all campaigns.
  * `GET /api/campaigns/:id` - Fetch a specific campaign by ID.
  * `POST /api/campaigns` - Create a new campaign.
  * `PUT /api/campaigns/:id` - Update a campaign (name, client, status).
  * `DELETE /api/campaigns/:id` - Delete a campaign.

## Thought Process and Learnings

This assignment was an excellent opportunity to demonstrate my ability to build a **complete full-stack application**. I focused on making it functional, organized, and visually appealing.

Key takeaways:

* Structuring a **full-stack project** with proper backend and frontend separation.
* Implementing **secure authentication** using JWT and Bcrypt.
* Managing **state and API integration** in React using hooks and Axios.
* Understanding **MongoDB schema design** for real-world use cases.
* Emphasizing **user experience (UX)** and responsive design.

It was a great learning experience that helped strengthen my full-stack development skills and my understanding of practical project building.

If you have any questions or suggestions, feel free to reach out. Happy tracking! 🚀


