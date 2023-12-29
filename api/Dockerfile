# Base node 20 image
FROM node:20-alpine

WORKDIR /usr/src/app

# COPY ./package*.json ./
COPY ./api/package.json ./api/package-lock.json ./

# Install dependencies; remove existing node_modules, install dependencies at a time
RUN npm i -g babel-cli@6.26.0


# Copy everything
COPY . ./

WORKDIR /usr/src/app/api
RUN npm install
RUN npm run build

# Start node app
CMD [ "node","index.js" ]
