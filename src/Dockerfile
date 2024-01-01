From node:alpine as builder 

ENV NODE_ENV production
WORKDIR /data/www/hxf_web
ADD . /data/www/hxf_web 

RUN npm install && npm run build && npm install -g http-server
EXPOSE 80
CMD http-server ./build -p 80 