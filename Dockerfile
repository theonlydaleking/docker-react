
# Tag it as "builder"
FROM node:alpine as builder
WORKDIR '/app'
RUN apk add --update yarn
COPY package.json .
RUN yarn
COPY ./ ./
CMD ["yarn", "build"]

# From terminates the previous from block
FROM nginx
COPY --from=builder /app/build /usr/share/nginx/html
