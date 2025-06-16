# React devcontainer

This example devcontainer leverages an example [Vite](https://vite.dev/) single page app to illustrate TypeScript / JavaScript React development in a devcontainer.

### Running

```
cd my-spa-app
npm run dev
```

### Setup (this is already done and included here for my-spa-app)

```
npm create vite@latest my-own-app -- --template react-ts
```

```
cd my-own-app
npm install
npm install react-router-dom
```

Modify the vite.config.ts to include a server section after the plugins section.

```
  server: {
    host: true, // or '0.0.0.0'
  },
```  

```
npm run dev
```
