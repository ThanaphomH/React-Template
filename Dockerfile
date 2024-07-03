FROM node:20.12.1-alpine3.18 as build

WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm
RUN pnpm install

COPY . .

RUN pnpm run build

# production environment
FROM nginx:stable-alpine as production

# Copy the built files from the 'dist' directory to the Nginx html directory
COPY --from=build /app/dist /usr/share/nginx/html

# Copy custom Nginx configuration if you have one, otherwise use default
COPY /nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Expose the desired port (80 by default for Nginx)
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
