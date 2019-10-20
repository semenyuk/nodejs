FROM node:10
WORKDIR ./src
COPY package*.json ./
RUN npm install --no-save
COPY . .
EXPOSE 8080
CMD [ "npm", "start" ]