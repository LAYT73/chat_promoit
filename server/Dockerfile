# Stage 1: Build the NestJS app
FROM node:18 as build

WORKDIR /app

# Copy the package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the NestJS app
RUN npm run build

# Stage 2: Run the built app in production mode
FROM node:18

WORKDIR /app

# Copy only the built files and package.json from the previous stage
COPY --from=build /app/dist ./dist
COPY --from=build /app/package*.json ./

# Install only production dependencies
RUN npm install --only=production

# Expose the port
EXPOSE 3000

# Run the NestJS application
CMD ["npm", "run", "start:prod"]
