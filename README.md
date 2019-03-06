# tiny-blog-backend

Backend for tiny-blog.

Any Issues and PRs welcome.

Please follow best practices when contributing (after v1.0.0): https://github.com/marvelous-systems/DevelopmentBestPractices

### Related repositories

tiny-blog: https://github.com/strangedev/tiny-blog

tiny-blog-ui: https://github.com/strangedev/tiny-blog-ui

tiny-blog-db: https://github.com/strangedev/tiny-blog-db

tiny-blog-model: https://github.com/strangedev/tiny-blog-model

tiny-blog-api: https://github.com/strangedev/tiny-blog-api

## Deployment

### Official docker image

noahhummel/tiny-blog-backend: https://hub.docker.com/r/noahhummel/tiny-blog-backend

| Environment variable | Value                                      |
|----------------------|--------------------------------------------|
| MONGODB_HOST         | hostname of mongodb to use, e.g. localhost |
| MONGODB_PORT         | port MONGODB_HOST is listening on          |

## Development

### Building

```bash
yarn run build
```

### Running locally

```bash
export MONGODB_HOST=localhost
EXPORT MONGODB_PORT=27017
yarn run server
```
