# Setup

## Initialize project

``` bash
git init
npm init
```

## Commitizen

``` bash
pnpm add -D commitizen
pnpm dlx commitizen init cz-conventional-changelog --save-dev --save-exact --force
```

``` git
git add .
git cz
```

## Automatic Version

[{{{CITATION{{{_1{Mastering Software Versioning in JavaScript Projects](https://dev.to/frachtwerk/mastering-software-versioning-in-javascript-projects-4o22)

``` bash
pnpm add standard-version --save-dev
```

### 1. Add a script to your package.json

``` json
{
  "scripts": {
    "release": "standard-version"
  }
}
```

[{{{CITATION{{{_2{How to automate a Javascript project versioning](https://dev.to/fborges42/how-to-automate-a-javascript-project-versioning-43bd)

### 2. Initialize Standard Version

```bash
pnpm dlx standard-version --first-release
```

[{{{CITATION{{{_3{Setup automatic versioning in a Javascript/Nativescript project](https://dev.to/valentinprgnd/setup-automatic-versioning-in-a-javascript-nativescript-project-nnj)

### 3. Set up Semantic Release

``` bash
pnpm add semantic-release --save-dev
```

[{{{CITATION{{{_4{Automated versioning and package publishing using GitHub Actions and ...](https://dev.to/kouts/automated-versioning-and-package-publishing-using-github-actions-and-semantic-release-1kce)

### 4. Create a configuration file for Semantic Release (semantic-release.config.js)

``` javascript
module.exports = {
  branches: [
    {
      name: 'main',
      prerelease: false,
    },
    {
      name: 'next',
      prerelease: true,
    },
  ],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    '@semantic-release/npm',
    '@semantic-release/git',
  ],
}
```

[{{{CITATION{{{_5{Automated versioning and package publishing using GitHub Actions and ...](https://dev.to/kouts/automated-versioning-and-package-publishing-using-github-actions-and-semantic-release-1kce)

### 5. Set up GitHub Actions: Create a .github/workflows/release.yml file with the following content

``` yaml

name: Release

on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v2

      - name: Install dependencies
        run: npm install

      - name: Run release
        run: npx semantic-release
```

[{{{CITATION{{{_6{Automated versioning and package publishing using GitHub Actions and ...](https://dev.to/kouts/automated-versioning-and-package-publishing-using-github-actions-and-semantic-release-1kce)

This setup will automatically bump the version, generate a changelog, update the CHANGELOG.md file,    and create a Git tag whenever you push to the main branch

## Typescript

### 1. Install & initialize typescript and types

```bash
pnpm add -D typescript
pnpm add @types/express @types/node -D
pnpm tsc --init
```

### 2. Update tsconfig.json

```json
{
  "compilerOptions": {
    "outDir": "dist",
    "sourceMap": true,
    "target": "esnext",
    "module": "commonjs",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "noImplicitAny": true,
    "strict": true,
    "skipLibCheck": true
  },
  "include": [
    "./*.js",
    "src/**/*.ts",
    "test/**/*.ts",
  ],
}
```

### 3. Add the following scripts to your package.json file

```json
"scripts": {
  "start": "ts-node src/index.ts",
  "build": "tsc",
}
```

## Set up automated ESLint and Prettier using Husky

### 1. Install the dependencies

```bash
pnpm add -D eslint prettier husky lint-staged --save-exact
pnpm add -D eslint-plugin-prettier eslint-config-prettier
```

### 2. Initialize ESLint

```bash
pnpm dlx eslint --init
```

```bash
✔ How would you like to use ESLint? · problems
✔ What type of modules does your project use? · commonjs
✔ Which framework does your project use? · react
✔ Does your project use TypeScript? · typescript
✔ Where does your code run? · browser, node
The config that you've selected requires the following dependencies:

eslint, globals, @eslint/js, typescript-eslint, eslint-plugin-react
✔ Would you like to install them now? · No / Yes
✔ Which package manager do you want to use? · pnpm
```

### 3. Update eslint.config.mjs

```javascript
export default [
  // Add this to the end
  eslintPluginPrettierRecommended
];
```

### 4. Create a Prettier configuration file (.prettierrc)

```json
{
  "singleQuote": true,
  "semi": false
}
```

### 5. Set up lint-staged: Add the following to your package.json

```json
{
  "lint-staged": {
    "*.{js,jsx,ts,tsx}": [
      "eslint --fix",
      "prettier --write"
    ]
  }
}
```

### 6. Set up Husky

```bash
pnpm dlx husky init
```

### 7. Add the following to your package.json

```json
"husky": {
    "hooks": {
      "pre-commit": "npx lint-staged"
    }
  },
```

## Setup nodemon

### 1. Install dependencies

```bash
pnpm add nodemon ts-node -D
```

### 2. Update package.json

```json
{
   "main": "src/index.ts",
   "scripts": {
    ...
    "start": "ts-node src/index.ts",
    "dev": "nodemon src/index.ts",
    ...
   }
}
```

### 3. Create blank ./src/index.ts

## Express

### Based on CJ's [express-api-starter](https://github.com/w3cj/express-api-starter)

### 1. Install express & dotenv

```bash
pnpm add express dotenv
```

### 2. Create basic app.ts file

```typescript
import express from 'express'

require('dotenv').config()

const app = express()

export default app
```

### 3. Rewrite index.ts to import the app

```typescript
import app from "./app"

const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log(`Listening: http://localhost:${port}`)
})
```

### 4. Create .env file & add it to .gitignore

```javascript
// ./.env
NODE_ENV=development
PORT=5000

// ./.gitignore
node_modules

.env*
```

## Morgan, Cors, Helmet

### 1. Install dependencies

```bash
pnpm add morgan cors helmet
pnpm add -D @types/morgan @types/cors
```

### 2. Add to app.ts

```typescript
import morgan from 'morgan'
import cors from 'cors'
import helmet from 'helmet'

const app = express()

/// New stuff
app.use(morgan('dev'))
app.use(helmet())
app.use(cors())
app.use(express.json())
/// End of new stuff

export default app
```

## Create Typescript middlewares

### 1. Add basic MessageResponse interface

```typescript
./src/interfaces/MessageResponse.ts
export default interface MessageResponse {
  message: string
}
```

### 2. Add to app.ts

```typescript
// After other imports
import MessageResponse from './interfaces/MessageResponse'
/// 

const app = express()

app.use(morgan('dev'))
app.use(helmet())
app.use(cors())
app.use(express.json())

/// Add the following
app.get<{}, MessageResponse>('/', (req, res) => {
  res.json({
    message: 'Hello World!',
  })
})
///

export default app
```

## Install and configure MongoDB & Zod

### 1. Install dependencies

```bash
pnpm add zod mongodb
```

### 2. Create boilerplate route and model

```typescript
// ./src/api/boilerplate/boilerplate.model.ts
import * as z from 'zod'

const Boilerplate = z.object({
  content: z.string().min(1),
  done: z.boolean().default(false),
})

type Boilerplate = z.infer<typeof Boilerplate>

export default Boilerplate

// ./src/api/boilerplate/boilerplate.routes.ts
import { Router, Response, Request } from 'express'
import Boilerplate from './boilerplate.model'

const router = Router()

router.get('/', (req: Request, res: Response<Boilerplate[]>) => {
  res.json([
    {
      content: 'Boilerplate content',
      done: false,
    },
  ])
})
export default router
```

## Testing with Jest, Supertest & Babel

## 1. Install Dependencies
```bash
pnpm add jest @types/jest ts-jest supertest @types/supertest
pnpm add --save-dev babel-jest @babel/core @babel/preset-env @babel/preset-typescript
```
### 2. Create a jest.config.js
```bash
pnpm dlx ts-jest config:init
```

### 3. Add jest package.json script
```json
///add to package.json
"scripts": {
  // ...
  "test": "jest",
}
```

### 2. Create test for api
```typescript
import request from "supertest"

import app from "../app"

describe("GET /api", () => {
  it('Responds with a json message', (done) => {
    request(app)
      .get("/api/v1")
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200,  {
        message: 'http://localhost:5000/api/v1',
      },done)
  })
})
```