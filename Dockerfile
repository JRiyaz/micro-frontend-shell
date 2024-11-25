FROM node:20.18.1 AS builder
WORKDIR /app
COPY package.json pnpm-lock.yaml tailwind.config.js submodule-husky-hook-path.sh ./
RUN npm install -g pnpm@8.15.5 @angular/cli@19.0.1
RUN pnpm install
COPY . .
RUN ng build --project=shared-ui && ng build --project=shell

# FROM nginx:stable-alpine3.20
# WORKDIR /usr/share/nginx/html
# COPY --from=builder /app/dist/shell/browser ./shell
# RUN cp -r -n ./shell/* ./
# COPY ./projects/shell/nginx.conf /etc/nginx/nginx.conf
# CMD nginx -g "daemon off;"

FROM registry.access.redhat.com/ubi8/nginx-120
COPY ./projects/shell/nginx.conf "${NGINX_CONF_PATH}"
WORKDIR /usr/share/nginx/html2/shell
COPY --from=builder /app/dist/shell/browser ./
RUN cp ./federation.manifest.json ../
RUN cp ./remoteEntry.json ../
CMD nginx -g "daemon off;"
