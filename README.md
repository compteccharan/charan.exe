# charan.exe

say hi to me from your terminal:

```sh
npx charan.exe
```

it prints a small purple terminal card with a pixel robot, a few `charan.exe` boot lines, what i'm building and where to find me. zero dependencies, node 16+.

colors follow your terminal; set `NO_COLOR=1` to turn them off.

made by [Charan Nihaal R](https://charancodes.com). MIT licensed.

## shipping a new version

edit `bin/index.js`, bump `"version"` in `package.json` (for example 1.0.1 to 1.0.2), and push to `main`. the GitHub Action publishes it to npm by itself.
