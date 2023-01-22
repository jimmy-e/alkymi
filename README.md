## Alkymi Coding Challenge:

This application was bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

* Note: If you come across the error `The engine "node" is incompatible with this module.` while 
  running `yarn`, you can just run `yarn --ignore-engines`.

To get started, run `yarn` and then `yarn dev`. The application will be available on 
[http://localhost:3000](http://localhost:3000). In addition, if you want to run a production 
build, you can run `yarn build` and then `yarn start`.

To run tests, you can run `yarn test`.

## Architecture

```
  src/
    - components/
    - pages/
    - store/
    - types.ts
```

* `components/`: Common components that are used (in this case, the Checkbox, Input and Dropdown).
* `pages/`: The main application and its main components.
* `store/`: Our redux store.
* `types.ts`: Common types used throughout the application

