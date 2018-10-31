
# Tag it as "builder"
FROM node:alpine as builder
WORKDIR "/app"
RUN apk add --update yarn
COPY ./package.json .
RUN yarn
COPY . .
RUN ["yarn", "build"]

# From terminates the previous from block
FROM nginx
EXPOSE 80
COPY --from=builder /app/build /usr/share/nginx/html
