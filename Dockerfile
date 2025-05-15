FROM node:20.18.1 AS builder
WORKDIR /app
COPY package.json pnpm-lock.yaml tailwind.config.js submodule-husky-hook-path.sh ./
RUN npm install -g pnpm@9.14.2 @angular/cli@19.1.2
RUN pnpm install
COPY . .
RUN ng build --project=shared-ui && ng build --configuration production --project=shell

FROM nginx:stable-alpine3.21

# The newly generated json files will be kept under WORKING_PATH env
ENV WORKING_PATH=/usr/share/nginx/shell
WORKDIR $WORKING_PATH

COPY --from=builder /app/dist/shell/browser ./
COPY ./projects/shell/nginx.conf /etc/nginx/nginx.conf

COPY ./scripts/*.sh /app/scripts/
RUN chmod +x /app/scripts/*.sh

# Run the shell script using sh
CMD ["sh", "/app/scripts/environment.sh"]
