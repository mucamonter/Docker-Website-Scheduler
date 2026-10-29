FROM node:24-alpine
WORKDIR /app

RUN npm install -g pnpm
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN pnpm install 

COPY app ./app
COPY dist ./dist
COPY prisma7.config.ts ./




COPY . .
# link falso só para ter algo e dar tempo de rodar o resto
RUN DATABASE_URL="postgresql://mock:mock@localhost:5432/mock" npx prisma generate


RUN npm exec prisma generate
RUN pnpm run build





EXPOSE 3000
CMD ["sh", "-c", "npx prisma generate && pnpm start:prod"]
