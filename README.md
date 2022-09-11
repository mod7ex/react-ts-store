## \* 1 setup browsers_list + eslint

## \* 2 setup paths @ & ~

### in tsconfig.json add:

```
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "~/*": ["./src/*"],
      "@/*": ["./src/components/*"]
    }
  },
```

## \* 1 add scss
