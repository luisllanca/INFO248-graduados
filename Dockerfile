FROM node:14

WORKDIR /app

COPY package.json package-lock.json /app/

RUN npm install

COPY . /app

RUN npm run build

EXPOSE 8080

CMD ["node", "dist/app.js"]
