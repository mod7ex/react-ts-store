## \* 1 setup browsers_list + eslint

---

## \* 2 setup paths @ & ~

- install `customize-cra` & `react-app-rewired` as dev-dependencies
  create a `config-overrides.js` (exact name no .ts) with the following content

```ts
const { override, addWebpackResolve } = require("customize-cra");
const path = require("path");

module.exports = override(
  addWebpackResolve({
    alias: {
      "@": path.resolve(__dirname, "./src/components"),
      "~": path.resolve(__dirname, "./src"),
    },
  })
);
```

- in package.json scripts write

```json

"scripts": {
  "start": "react-app-rewired start",
  "build": "react-app-rewired build",
  "test": "react-app-rewired test",
  "eject": "react-scripts eject"
},

```

- for intellisense (VS-CODE) in tsconfig.json (or even jsconfig.json)

```json
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "~/*": ["./src/*"],
      "@/*": ["./src/components/*"]
    },

    ...rest
  },

```

---

## \* 3 add scss
