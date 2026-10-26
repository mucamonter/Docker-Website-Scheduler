FROM node:24-alpine
WORKDIR /app

RUN npm install -g pnpm
COPY package*.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN pnpm install 

COPY app ./app
COPY src ./src


COPY ./src/prisma ./src/prisma
COPY prisma7.config.ts ./


# link falso só para ter algo e dar tempo de rodar o resto
RUN DATABASE_URL="postgresql://mock:mock@localhost:5432/mock" pnpm exec prisma generate
COPY . .

RUN npm exec prisma generate
RUN pnpm build





EXPOSE 3000
CMD ["pnpm", "start:prod"]
