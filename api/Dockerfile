# Base node 18 image
FROM node:18-alpine

WORKDIR /usr/src/app

# COPY ./package*.json ./
COPY ./api/package.json ./api/package-lock.json ./

# Install dependencies; remove existing node_modules, install dependencies at a time
RUN npm i -g babel-cli


# Copy everything
COPY . ./

WORKDIR /usr/src/app/api
RUN npm install
RUN npm run build

# Start nuxt app use if ngingx and supervisor no required
CMD [ "node","index.js" ]
