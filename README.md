# knife.media

I started switching markup to [pug](https://pugjs.org/api/getting-started.html) template engine, and you can still find 'old' html files in root folder. If you will create new html files or work with existing ones, please keep using pug for this purpose. All pug templates are located in `./src/templates/pages`.

## Environment setup

```sh
  $ npm install
```

## Development

Start the Webpack server (includes live reloading when you change files):

```sh
  $ npm run dev
```

Open [http://localhost:9000](http://localhost:9000) in a browser. `./src/app.js` is the entry point.


## Production

```sh
  $ npm run prod
```
