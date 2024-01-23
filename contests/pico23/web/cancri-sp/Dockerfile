FROM ubuntu:18.04

RUN apt-get update && \
	apt-get install -qy gpg wget gdb

# Set the Chrome repo.
RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \
    && echo "deb http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list

# Install Chrome.
RUN apt-get update && apt-get -y install google-chrome-stable

RUN curl -sL https://deb.nodesource.com/setup_12.x | bash -
RUN apt-get install -y nodejs npm

ADD src /mnt/src
ADD template /mnt/template
ADD run.sh /mnt

WORKDIR /mnt/template
RUN npm install --locked --frozen

ARG FLAG
RUN mkdir /challenge
# The "flag" field in this json object is mandatory, the rest are lookup fields.
RUN echo "{\"flag\":\"$FLAG\"}" > /challenge/metadata.json
RUN chmod 000 /challenge/metadata.json
RUN echo "$FLAG" > /challenge/flag-$(openssl rand -hex 16)

RUN useradd --user-group --system --no-log-init app
USER app

ENV PORT 1337
EXPOSE 1337

CMD ["node", "server.js"]

# PUBLISH 1337 AS socat

