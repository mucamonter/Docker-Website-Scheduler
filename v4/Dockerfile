FROM node:26-alpine
WORKDIR /app

COPY package*.json ./

RUN npm install

COPY ./src/prisma ./src/prisma
COPY prisma7.config.ts ./

RUN DATABASE_URL="postgresql://mock:mock@localhost:5432/mock" npx prisma generate

COPY app ./app
COPY src ./src



COPY . .
EXPOSE 3000
CMD ["sh", "-c", "npx prisma generate && npm start"]
