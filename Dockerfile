FROM node:10

WORKDIR /app/hello_world

COPY ./package.json ./


RUN npm install 

COPY . .

CMD ["node",  "app.js"]
