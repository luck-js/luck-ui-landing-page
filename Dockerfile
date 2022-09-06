FROM node:16.17.0
WORKDIR /usr/src/luck-ui-2
COPY package.json ./
RUN npm install --legacy-peer-deps
COPY . .
ARG CMS_USERNAME
ARG CMS_PASSWORD
ARG CLIENT_URL
ARG TRACKING_ID
ARG SHOULD_SHOW_DRAFT
ARG VIRTUAL_HOST
ARG ROLLBAR_ACESS_TOKEN
ENV CMS_USERNAME=$CMS_USERNAME
ENV CMS_PASSWORD=$CMS_PASSWORD
ENV CLIENT_URL=$CLIENT_URL
ENV TRACKING_ID=$TRACKING_ID
ENV SHOULD_SHOW_DRAFT=$SHOULD_SHOW_DRAFT
ENV VIRTUAL_HOST=$VIRTUAL_HOST
ENV ROLLBAR_ACESS_TOKEN=$ROLLBAR_ACESS_TOKEN
RUN yarn run build
ENV PORT 3000
EXPOSE 3000
CMD ["npm", "start"]
