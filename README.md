# Next Pure ERC20 Swap (Next.js)

![Modern Neon Sci-Fi Fantasy Book Cover copy](https://github.com/FanbaseLabs/React-Aggregate-ERC20-Swap/assets/145924938/277ca724-0bf4-4815-a4f9-12a26d467a69)

This repository is a minimal Next.js app that renders `fanbase-pure-erc20-swap-widget` on the home page.

## What is in the code

- `pages/index.tsx`: loads `fanbase-pure-erc20-swap-widget` with `next/dynamic` and `ssr: false`.
- `pages/api/hello.ts`: sample Next.js API route.
- `pages/_app.tsx`: global app wrapper and global CSS import.

## Install and run

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Available scripts

- `npm run dev`: start local development server.
- `npm run build`: create production build.
- `npm run start`: start production server.
- `npm run lint`: run Next.js ESLint checks.

## Widget docs

Pure swap widget reference:
https://fanbase-io.gitbook.io/docs/reference/swap-widget-sdk/pure-swap-widget

Plan/app access:
https://www.plan.fanbase.io

## Notes

- Current widget configuration is in `pages/index.tsx` (`appId` and `chainId`).
- If you change widget package usage in code, keep `package.json` dependencies in sync.
