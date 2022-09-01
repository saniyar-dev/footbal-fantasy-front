FROM  node:18-alpine3.15 as  builder
WORKDIR /app
COPY package.json /app/
RUN npm i
COPY ./ /app/
RUN npm run build
FROM nginx:1.23 as runner
# Set working directory to nginx asset directory
WORKDIR /usr/share/nginx/html
# Remove default nginx static assets
RUN rm -rf ./*
# Copy static assets from builder stage
COPY --from=builder /app/build .
# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]