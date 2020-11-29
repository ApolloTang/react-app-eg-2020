Upgrading node to v12.19.0 result in error when compiling:

```
ERROR in ./main.js
Module build failed (from ../node_modules/babel-loader/lib/index.js):
Error: Cannot find module '/Users/apollo.tang/0/g--react-arch-2020/react-app-eg-2020/node_modules/@babel/compat-data/data/corejs3-shipped-proposals'
```

Simply remove node_modules and reinstall will not solve the problem.

Ref[1] provide solution using `npm update`, but I am looking for solution with yarn.
Ref[2] pointed out remove lock file will solve the problem.

After reading this Ref[3], I solved it with:

```
yarn add @babel/preset-env
```

[1] [https://github.com/JeffreyWay/laravel-mix/issues/2383](https://github.com/JeffreyWay/laravel-mix/issues/2383) <br>
[2] [https://github.com/JeffreyWay/laravel-mix/issues/2383#issuecomment-650171758](https://github.com/JeffreyWay/laravel-mix/issues/2383#issuecomment-650171758) <br>
[3] [https://github.com/storybookjs/storybook/issues/10477#issuecomment-619423402](https://github.com/storybookjs/storybook/issues/10477#issuecomment-619423402) <br>
