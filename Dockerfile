FROM node:lts-alpine as builder

WORKDIR /app

COPY package*.json ./

RUN npm ci --omit=dev

COPY . .

RUN npm run build

FROM node:lts-alpine

COPY --from=builder /app/build ./build
RUN npm install -g serve

EXPOSE 8080

CMD ["serve", "-s", "build", "-p", "8080"]
