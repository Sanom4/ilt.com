# Use an official Node.js runtime as the base image
FROM node:20

# Set the working directory in the container
WORKDIR /src

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install Node.js dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the React app (if needed)
RUN npm run build

# Expose the port that the app will run on
EXPOSE 3000

# Define the command to start the app
CMD ["npm", "start"]