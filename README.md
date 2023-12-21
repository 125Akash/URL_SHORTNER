# URL Shortener Application

## Overview

This URL Shortener Application is a web-based service built using Node.js, Express, and MongoDB. It provides users with the ability to shorten long URLs into more manageable and shareable links. The application includes user authentication with login and signup functionality using EJS as the templating engine.

## Features

- Shorten long URLs into easily shareable links.
- User authentication with login and signup functionality.
- MongoDB database for storing user information and shortened URLs.
- Simple and intuitive user interface.

## Prerequisites

Before running the application, make sure you have the following installed on your system:

- Node.js
- MongoDB

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/url-shortener.git
   ```

2. Navigate to the project directory:

   ```bash
   cd url-shortener
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory and configure the following variables:

   ```env
   PORT=YourPort
   MONGODB_URI= YOUR MONGO URL 
   SESSION_SECRET=your_session_secret
   ```

   Replace `your_session_secret` with a secret key for session management.

5. Start the application:

   ```bash
   npm start
   ```

   The application will be accessible at [http://localhost:yourPort](http://localhost:yourPort).
   Default Port is 5000
   

## Usage

1. Open your web browser and navigate to [http://localhost:yourPort](http://localhost:yourPort). Default Port is 5000
2. Sign up for a new account or log in if you already have one.
3. After logging in, you can shorten a URL by entering it in the provided input field and clicking the "Short It" button.
4. Copy and share the generated short URL.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- EJS (Embedded JavaScript) for templating
- Express-Session

Feel free to contribute, report issues, or suggest improvements!
