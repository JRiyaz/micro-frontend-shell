FROM node:20.18.1 AS builder
WORKDIR /app
COPY package.json pnpm-lock.yaml tailwind.config.js submodule-husky-hook-path.sh ./
RUN npm install -g pnpm@8.15.5 @angular/cli@18.2.12
RUN pnpm install
COPY . .
RUN ng build --project=shared-ui && ng build --base-href=/shell/ --configuration production --project=shell

FROM nginx:alpine
WORKDIR /usr/share/nginx/html
COPY --from=builder /app/dist/shell/browser ./
# RUN cp -r -n ./shell/* ./
# COPY ./projects/shell/default.conf /etc/nginx/conf.d/default.conf
COPY ./projects/shell/nginx.conf /etc/nginx/nginx.conf
CMD nginx -g "daemon off;"
