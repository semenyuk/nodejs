FROM node:10

WORKDIR /usr/src/node-app
COPY package*.json ./
RUN npm install --no-save
COPY . .
EXPOSE 8080
CMD [ "npm", "start" ]