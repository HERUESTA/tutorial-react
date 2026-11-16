FROM node:22-alpine

# Chromatic はコミット履歴からベースラインを決めるため git が必要 (alpine には入っていない)
RUN apk add --no-cache git \
    # バインドマウントした /app はコンテナ内ユーザーと所有者が異なり、
    # git が "dubious ownership" で停止するのを防ぐ
    && git config --system --add safe.directory /app

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
