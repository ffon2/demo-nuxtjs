FROM node:14 as build

ENV TZ=Asia/Bangkok
ENV CRYPRESS_INSTALL_BINARY=0

RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

RUN mkdir -p /app/build
WORKDIR /app/build
ENV PATH /app/build/node_modules/.bin:$PATH
COPY package.json /app/build/package.json
COPY package-lock.json /app/build/package-lock.json
RUN CYPRESS_INSTALL_BINARY=0 npm ci
COPY . /app/build/
RUN npm run generate:dev

FROM nginx:1.20.2
COPY --from=build /app/build/dist /usr/share/nginx/html
COPY k8s/nginx-default.conf  /etc/nginx/conf.d/default.conf
EXPOSE 8080
CMD ["nginx","-g","daemon off;"]
