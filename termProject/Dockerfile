FROM node:20.11.0

WORKDIR /app

COPY . .

RUN npm install
EXPOSE 80

ENV NODE_ENV production

CMD ["npm", "run", "dev"]
