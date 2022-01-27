FROM node:14.7-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --only=prod
COPY . .
CMD ["npm","run","start"]
