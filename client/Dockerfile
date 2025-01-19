# Use official Node.js image as a base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Vite app for production
RUN npm run build

# Expose the Vite app port (default is 5173)
EXPOSE 4173

# Start the app in production mode
CMD ["npm", "run", "preview", "--", "--host"]
