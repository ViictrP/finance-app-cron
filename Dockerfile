FROM node:18
# Defining the working directory
WORKDIR /usr/src/app
# Copying app
COPY . .
# Installing dependecies
RUN npm i -g husky
RUN npm i -g typescript
RUN npm ci
RUN npm run build:prod
# Defining environment variables
ENV ADMIN_EMAIL=$ADMIN_EMAIL
ENV ADMIN_PASSWORD=$ADMIN_PASSWORD
ENV API_HOST=$API_HOST
# Running the application
CMD [ "npm", "start" ]
