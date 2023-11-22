# Use an official Node runtime as a parent image
FROM node:latest

WORKDIR /app

# Update npm
RUN npm install -g npm@latest

# Clear npm cache
RUN npm cache clean --force

# Copy package.json and package-lock.json to the working directory
COPY package.json .
COPY package-lock.json .

# Install app dependencies
RUN npm install

# Copy the application code to the container
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Define the command to run the application
CMD [ "npm", "start" ]


