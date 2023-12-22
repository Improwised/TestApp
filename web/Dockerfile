# Base node 12 image
FROM node:18-alpine


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


# Start nuxt app use if ngingx and supervisor no required
CMD [ "npm", "run", "preview" ]
