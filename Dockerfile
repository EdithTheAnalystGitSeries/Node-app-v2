FROM node:20-alpine
WORKDIR /usr/src /app
COPY ..
RUN npm install --production
COPY . .
EXPOSE 3000
CMD ["node", "app.js"]
