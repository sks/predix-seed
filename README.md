# PX + Vue + Typescript Seed

[![Build Status](https://travis-ci.org/sks/predix-seed.svg?branch=master)](https://travis-ci.org/sks/predix-seed)

A [Vue](https://vuejs.org/) Application written in [typescript](https://www.typescriptlang.org) using [Polymer/PX components](https://predix-ui.com)

## Scripts

## Dependencies

```sh
yarn install && bower install
```

Checkout [.travis.yml](./.travis.yml) file for details

## Building

```sh
yarn build
```

## Hosting

On cloudfoundry Using [staticfile-buildpack](https://github.com/cloudfoundry/staticfile-buildpack).

Currently hosted [here](https://predix-seed-vue.run.aws-usw02-pr.ice.predix.io/)

Checkout [manifest.yml](./manifest.yml) file has more details

```sh
cf push
```

## Using Docker image

```sh
# Build the image
yarn dockerize

# Run the image already Hosted
docker run \
    -d \
    --name predix-seed \
    -p 8080:80 \
    --rm predixdev/predix-seed:latest

## Navigate to http://localhost:8080
## Stop the docker Container

docker stop predix-seed
```
