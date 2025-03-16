# Use a lightweight Node.js image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the project files
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the code into the container
COPY . .

# Expose the port used by the API
EXPOSE 3000

# Command to start the NestJS server
CMD ["npm", "run", "start:dev"]