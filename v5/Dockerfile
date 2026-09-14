FROM node:22-alpine
WORKDIR /app
COPY package*.json /app/
RUN npm ci --omit=dev --no-found --no-fund && npm cache clean --force
COPY app ./app
COPY server ./server
EXPOSE 3000
CMD ["node", "server/server.js"]
