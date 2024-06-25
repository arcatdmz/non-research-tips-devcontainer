FROM node:20

RUN npm i -g prisma

RUN mkdir /app
WORKDIR /app

COPY ./ ./prisma/

CMD [ "prisma", "studio"]
