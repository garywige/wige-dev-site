# Stage 1: Compile and Build angular codebase

# Use official node image as the base image
FROM node:current-alpine

# Set the working directory
WORKDIR /usr/local/app

# Add the source code to app
COPY ./ /usr/local/app/

# Install all the dependencies
RUN npm install

# Generate the build of the application
RUN npm run build:prod

CMD ["node", "/usr/local/app/dist/Wige-Dev/server/main.js"]
