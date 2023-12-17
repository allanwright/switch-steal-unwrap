## Introduction
This repo is a Vue SPA implementation of the gift exchange game known as 'switch, steal or unwrap'. It is a secret santa game where traditionally, players roll a dice to determine what action should be taken. This implementation attempts to offer not much more than this basic premise, leaving any other specific rules, like when to end the game, up to 'house rules'.

## Development Environment
A devcontainer configuration file has been defined for use with [VSCode](https://code.visualstudio.com/). This configuration file also includes the list of recommended extensions. The following is a list of common commands that are useful when interacting with the project.

## Build and Deployment
The project is compiled for production using Github Actions and uploaded to an AWS S3 bucket, which is the origin for a Cloudfront Distribution serving requests for [stealy.link](https://stealy.link). More information about the cloud infrastructure can be found in the [switch-steal-unwrap-infrastructure](https://github.com/allanwright/switch-steal-unwrap-infrastructure) project.

### Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```