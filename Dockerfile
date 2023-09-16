FROM node:18.7.0-buster

RUN mkdir /app

WORKDIR /app
EXPOSE 3000
ENV DEBIAN_FRONTEND=noninteractive

COPY . /app

# # RUN yarn --force --no-lockfile
RUN yarn --no-lockfile

# CMD [ "tail", "-f", "/dev/null" ]

CMD ["node", "--require", "dd-trace/init", "./node_modules/.bin/nuxt", "--host"]
