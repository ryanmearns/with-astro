# `Turborepo` Vite starter

This is my starter Turborepo for applications with CI/CD deployment pipeline using SST Ion.

## Using this example

Run the following command to get starter:

```sh
pnpm install -g degit
mkdir my-app
cd my-app
degit ryanmearns/with-astro
```

## What's inside?

This Turborepo includes the following packages and apps:

### Apps and Packages

- `app`: an [Astro](https://astro.build) ts app with lucia-auth, drizzle and hono set up to deployed to AWS with [SST](http://ion.sst.dev)
- `@repo/eslint-config`: shared `eslint` configurations
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo
- `@repo/ui`: a stub React component library with Tailwind CSS shared by both web and docs applications

Each package and app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting
