FROM node:8.11 AS build
ARG NPM_TOKEN
WORKDIR /app
COPY . /app/
RUN echo "registry=https://packages.creditcards.com/artifactory/api/npm/npm-main/" > .npmrc && \
    echo "//packages.creditcards.com/artifactory/api/npm/npm-main/:_authToken=${NPM_TOKEN}" >> .npmrc && \
    echo "//packages.creditcards.com/artifactory/api/npm/npm-main/:always-auth=true" >> .npmrc && \
    npm install && \
    npm run build && \
    rm -rf /app/{src,build} && \
    rm -rf .npmrc

FROM node:8.11
ENV PORT 8080
ENV CONTAINER_PATH "/var/www"
ENV NODE_ENV=production
WORKDIR $CONTAINER_PATH
COPY --from=build /app /var/www
EXPOSE $PORT
CMD ["npm", "run", "server"]
