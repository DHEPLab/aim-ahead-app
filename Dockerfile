# 构建阶段
FROM node:lts-bullseye-slim as builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci --no-audit

COPY . .
RUN npm run build

# 运行阶段
FROM node:lts-bullseye-slim

WORKDIR /app

# 从构建阶段复制构建好的文件
COPY --from=builder /app/build ./build

# 安装 serve
RUN npm install -g serve

# 暴露端口
EXPOSE 8080

# 使用 serve 启动项目
CMD ["serve", "-s", "build", "-p", "8080"]
