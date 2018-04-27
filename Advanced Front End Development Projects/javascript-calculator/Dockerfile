FROM node:carbon

COPY . /tmp/calculator

WORKDIR /tmp/calculator

RUN ["npm","install"]

EXPOSE 8080

CMD ["npm", "start"]
