
FROM node:16

WORKDIR /app

COPY package*.json .
COPY db.json .

RUN npm install --legacy-peer-deps
RUN npm install -g json-server --legacy-peer-deps

COPY . .

CMD ["npm", "run", "server"]


#docker build --tag node-docker .
# docker run -p 8080:8080 -d node-docker