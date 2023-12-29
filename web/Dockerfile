# Base node 20 image
FROM node:20-alpine


WORKDIR /usr/src/app


# COPY ./package*.json ./
COPY ./web/package.json ./web/package-lock.json ./

# Install dependencies; remove existing node_modules, install dependencies at a time
RUN npm install


# Copy everything
COPY . ./

WORKDIR /usr/src/app/web

# # Build project
RUN npm run build


# Rename env file based on Mode
# RUN mv .env.${MODE} .env
RUN mv .env.example .env


# Starts react app
CMD [ "npm", "run", "start" ]
