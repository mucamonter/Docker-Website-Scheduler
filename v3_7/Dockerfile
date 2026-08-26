FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --omit=dev --no-audit --no-fund
COPY app ./app
COPY server ./server
EXPOSE 3000
CMD ["npm","start"]
