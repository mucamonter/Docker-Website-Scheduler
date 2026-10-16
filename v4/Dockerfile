FROM node:20-alpine AS builder
WORKDIR /app



COPY package*.json ./

RUN npm ci --no-audit --no-fund

RUN npm install dotenv


COPY app ./app

COPY src ./src

COPY prisma7.config.ts ./


RUN npx prisma generate

RUN npm prune --production


ENV DATABASE_URL="mysql://root:Ardmim.186!@db:3306/V2_DB"


COPY . .
EXPOSE 3000
CMD ["npm","start"]
