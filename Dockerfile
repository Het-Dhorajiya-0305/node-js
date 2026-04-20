FROM ubuntu

RUN apt-get update && apt-get install -y curl

# Install Node.js (includes npm)
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash - \
    && apt-get install -y nodejs

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY server.js ./

CMD ["node", "server.js"]