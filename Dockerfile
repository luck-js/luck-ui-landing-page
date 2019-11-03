FROM node:10-alpine
WORKDIR /usr/src/luck-ui-2
COPY package.json ./
RUN yarn install
COPY . .
ARG APPOLO_CLIENT_TOKEN
ARG CLIENT_URL
ARG TRACKING_ID
ARG SHOULD_SHOW_DRAFT
ENV APPOLO_CLIENT_TOKEN=$APPOLO_CLIENT_TOKEN
ENV CLIENT_URL=$CLIENT_URL
ENV TRACKING_ID=$TRACKING_ID
ENV SHOULD_SHOW_DRAFT=$SHOULD_SHOW_DRAFT
RUN yarn run build
ENV PORT 3000
EXPOSE 3000
CMD ["yarn", "start"]
