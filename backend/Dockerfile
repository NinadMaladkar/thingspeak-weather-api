# Use the official Node.js image as a parent image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the NestJS application
RUN npm run build

# Expose the port the app runs on
EXPOSE 3001

# Define the command to run the app
CMD ["npm", "run", "start:dev"]

#lsdkjfsdljfsdlkjfsldkjfdlskjfsdlkfjldskfjsdlkfjsdlkjfsldkfjslkdjfsldkjflksdjfl

# FROM node:18-alpine

# WORKDIR /app

# COPY package*.json .

# RUN npm install

# COPY . .

# EXPOSE 3001

# CMD ["npm", "run", "start:dev"]