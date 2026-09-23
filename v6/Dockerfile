FROM node:20-alpine

WORKDIR /app

RUN npm install -g pnpm

COPY package*.json pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile
COPY . .
RUN pnpm build 


EXPOSE 3000

#Produção
CMD ["node","dist/main.js"]

#Desenvolvimento
#CMD ["pnpm", "start:dev"]