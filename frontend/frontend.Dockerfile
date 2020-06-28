# https://hub.docker.com/_/debian?tab=tags
FROM "debian:10.4"

RUN apt-get update -qq && \
  apt-get install -y nodejs \
    npm &&\
    #postgresql-client \
    #yarnpkg && \
  apt-get clean

VOLUME ["/app"]

WORKDIR "/app"

RUN npm install

EXPOSE "4000"

ENTRYPOINT ["./entrypoint.sh"]

CMD ["npm", "run", "serve"]
