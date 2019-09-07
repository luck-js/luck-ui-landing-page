FROM node:10-alpine
WORKDIR /usr/src/luck-ui-2
COPY package.json ./
RUN yarn install
COPY . .
RUN yarn run build
ENV PORT 3000
EXPOSE 3000
CMD ["yarn", "start"]
