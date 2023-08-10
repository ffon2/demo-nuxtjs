## Development Setup

```bash
$ npm ci

# serve with hot reload at localhost:3000 (ต่อ api ที่ localhost:8080)
$ npm run dev

# build static
$ npm run generate

# start static
$ npm run start

# cypress open
$ npm run test:open
$ npm run test:open -- --config ignoreTestFiles="**/examples/*.spec.js"
```

## Production Setup

```bash
# build for production and launch server
$ npm run build
$ npm run start
```
