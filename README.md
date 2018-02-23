[![Build Status](https://travis-ci.org/sks/predix-seed.svg?branch=master)](https://travis-ci.org/sks/predix-seed)

# PX + Vue + Typescript Seed

A [Vue](vuejs.org) Application written in [typescript](https://www.typescriptlang.org) using [Polymer/PX components](predix-ui.com)

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

[manifest.yml](./manifest.yml) file has more details
```
cf push 
```