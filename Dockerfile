FROM node:14-alpine

WORKDIR /app

COPY . .

RUN npm i

VOLUME [ "/server" ]

EXPOSE 3000

CMD ["npm", "run", "dev"]