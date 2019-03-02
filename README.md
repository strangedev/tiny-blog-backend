# tiny-blog-backend

Backend for tiny-blog.

Any Issues and PRs welcome.

Please follow best practices when contributing (after v1.0.0): https://github.com/marvelous-systems/DevelopmentBestPractices

### Related repositories

tiny-blog-ui: https://github.com/strangedev/tiny-blog-ui

## Deployment

### Official docker image

noahhummel/tiny-blog-backend: https://hub.docker.com/r/noahhummel/tiny-blog-backend

## Development

### Init development environment

```bash
git clone --recurse-submodules git://github.com/strangedev/tiny-blog-backend
```

### Pull upstream changes

Note: Please contribute changes to app/src/model to: https://github.com/strangedev/tiny-blog-model

See also: https://git-scm.com/book/de/v1/Git-Branching-Rebasing, https://git-scm.com/book/en/v2/Git-Tools-Submodules

```bash
git fetch
git rebase master
git submodule update --init --recursive
```


