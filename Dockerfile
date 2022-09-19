FROM node:14-alpine

COPY . .

RUN npm ci

EXPOSE 3004 3000

CMD [ "npm", "run", "dev"]