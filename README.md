# Flora Care

Welcome to the Flora Care, a multifunctional platform where users can purchase IoT plant care devices, explore expert blogs on plant care, and visualize data from their IoT devices. This project is divided into two main parts: the client-side and the server-side.

## Client-Side

### Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A fast and opinionated frontend build tool.
- **React Router DOM**: Declarative routing for React.js.
- **Chart.js**: Simple yet flexible JavaScript charting for designers and developers.
- **React Chartjs 2**: React wrapper for Chart.js.
- **Emotion**: A popular library for writing styles with JavaScript.
- **Material-UI**: React components for faster and simpler web development.
- **Framer Motion**: A production-ready motion library for React.
- **Axios**: A promise-based HTTP client for the browser and Node.js.
- **React Paginate**: A pagination component for React.
- **React Toastify**: A toast notification library for React applications.

### Development Dependencies

- **Vite**: Build tool for modern web development.
- **Tailwind CSS**: A utility-first CSS framework.
- **Autoprefixer**: A PostCSS plugin to parse CSS and add vendor prefixes.
- **ESLint**: A pluggable and configurable linter tool for identifying and fixing problems in JavaScript code.
- **React Refresh**: Plugin for React Fast Refresh.
- **PostCSS**: A tool for transforming styles with JS plugins.
- **TypeScript**: A superset of JavaScript that adds static types.
- **@vitejs/plugin-react-swc**: A Vite plugin for using SWC as a React compiler.

### Scripts

- `dev`: Start the development server.
- `build`: Build the project for production.
- `lint`: Run ESLint to check for linting issues.
- `preview`: Preview the production build.

## Server-Side

### Technologies Used

- **Express**: A fast, unopinionated, minimalist web framework for Node.js.
- **MongoDB**: A NoSQL database for storing data.
- **Mongoose**: An Object Data Modeling (ODM) library for MongoDB and Node.js.
- **Passport.js**: Authentication middleware for Node.js.
- **JWT (JSON Web Token)**: A compact, URL-safe means of representing claims to be transferred between two parties.
- **Stripe**: A technology company that builds economic infrastructure for the internet.
- **AWS SDK**: Software development kit for working with Amazon Web Services (AWS).
- **Multer**: Middleware for handling `multipart/form-data`, primarily used for file uploads.
- **EJS**: A simple templating language that lets you generate HTML markup with plain JavaScript.
- **Express Session**: Session middleware for Express.
- **Express SSE (Server-Sent Events)**: Enables servers to push data to web clients over HTTP.

### Development Dependencies

- **Nodemon**: A utility that monitors files for changes and restarts the server.
- **dotenv**: Loads environment variables from a `.env` file.
- **bcryptjs**: A library for hashing passwords.
- **body-parser**: Middleware for handling JSON, Raw, Text, and URL-encoded form data.
- **cookie-parser**: Parses Cookie header and populates `req.cookies` with an object keyed by cookie names.
- **cors**: Middleware for enabling Cross-Origin Resource Sharing (CORS).
- **express-sse**: Server-Sent Events for Express.
- **jsonwebtoken**: JSON Web Token implementation.
- **multer-s3**: A Multer storage engine for AWS S3.

### Scripts

- `dev`: Start the server using Nodemon for development.

## Getting Started

1. Clone the repository.
2. Navigate to the `client` directory and run `npm install` to install client-side dependencies.
3. Navigate to the `server` directory and run `npm install` to install server-side dependencies.
4. Create a `.env` file in the `server` directory and add necessary environment variables.
   ```
   MONGODB_URI
   PORT
   JWT_KEY
   STRIPE_KEY
   CLIENT_URL
   STRIPE_ENDPOINT_SECRET
   AWS_ACCESS_KEY_ID
   AWS_SECRET_ACCESS_KEY
   AWS_REGION
   AWS_S3_BUCKET_NAME
   ```
5. Run `npm run dev` in both the `client` and `server` directories to start the development servers.

Now you can access the PlantCare Web App by visiting `http://localhost:3000` in your web browser.

Happy gardening! 🌱🌻
