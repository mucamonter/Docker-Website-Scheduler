FROM node:26-alpine
WORKDIR /app


COPY package*.json ./
COPY app ./app
COPY src ./src

RUN npm install

COPY ./src/prisma ./src/prisma
COPY prisma7.config.ts ./


# link falso só para ter algo e dar tempo de rodar o resto
RUN DATABASE_URL="postgresql://mock:mock@localhost:5432/mock" npx prisma generate





COPY . .
EXPOSE 3000
CMD ["npm", "start"]
