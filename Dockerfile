# Stage 1: Build the base image using the Node.js Alpine image
FROM node:hydrogen-alpine as base
# Set the working directory inside the container to /usr/src/app
WORKDIR /usr/src/app
# Copy the entire current directory (your application code) into the container
COPY . .


# Stage 2: Create an intermediate stage for installing dependencies
FROM base as install
# Change the working directory to the specific directory containing your application code
WORKDIR /usr/src/app/digital-pleasures
# Run npm install to install the application dependencies
RUN npm i


# Stage 3: Create a final stage for running the application
FROM install as start
# Expose port 3000 to allow external connections
EXPOSE 3000
# Define the command to run when the container starts, which is running your Node.js application (app.js in this case)
CMD [ "node", "app.js" ]
