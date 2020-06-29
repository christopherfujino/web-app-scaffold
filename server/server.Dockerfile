# Latest debian has outdated go version
FROM "debian:bullseye-20200607"

RUN apt-get update -qq && \
  apt-get install -y golang && \
    #postgresql-client \
    #less \
    #yarnpkg && \
  apt-get clean

VOLUME ["/app"]

WORKDIR "/app"

EXPOSE "8080"

ENTRYPOINT ["./entrypoint.sh"]

CMD ["go", "run", "."]
