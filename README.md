[![Build Status](https://travis-ci.org/sks/predix-seed.svg?branch=master)](https://travis-ci.org/sks/predix-seed)

# PX + Vue + Typescript Seed

A [Vue](https://vuejs.org/) Application written in [typescript](https://www.typescriptlang.org) using [Polymer/PX components](https://predix-ui.com)

## Scripts
#### Dependencies 
```
yarn install && bower install
```
Checkout [.travis.yml](./.travis.yml) file for details

#### Building
```
yarn build
```

#### Hosting
On cloudfoundry Using [staticfile-buildpack](https://github.com/cloudfoundry/staticfile-buildpack).

Currently hosted [here](https://predix-seed-vue.run.aws-usw02-pr.ice.predix.io/)

Checkout [manifest.yml](./manifest.yml) file has more details
```
cf push 
```

#### Using Docker image
```
# Build the image
docker build -t app:latest .

# Run the image already Hosted
docker run -d --name predix-seed -p 8080:80 --rm predixdev/predix-seed:latest
## Navigate to http://localhost:8080
## Stop the docker Container
docker stop predix-seed
```
