FROM ubuntu:20.04

COPY . /home/deno/app
WORKDIR /home/deno/app

RUN apt-get update && \
    apt-get install -y curl unzip && \
    curl -fsSL https://deno.land/x/install/install.sh | sh
ENV PATH="/root/.deno/bin:$PATH"
