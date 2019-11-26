> We highly suggest starting using https://github.com/artf/grapesjs-cli for your new plugin projects

# GrapesJS Lottie Plugin


<span><a href="https://david-dm.org/khalifagates/grapejs-lottie-plugin#info=devDependencies" title="View the status of this project's development dependencies on DavidDM"><img src="https://img.shields.io/david/dev/khalifagates/grapejs-lottie-plugin.svg" alt="Dev Dependency Status" /></a></span>

This is a plugin for grapejs users to implement and manipulate lottie animation on their browsers. Lottie airbnb animations can be found in the lottie market place. For more information, see [Lottie](https://lottiefiles.com). Lottie is not affliated with airbnb, but users all over the world create amazing svg animations.

### Usage
1. Clone this repository `git clone https://github.com/artf/grapesjs-plugin-boilerplate.git Lottie-plugin`
1. Install dependencies `npm i` and run the local server `npm start`
1. Start creating your plugin from `src/index.js`
1. Update README
1. When you're ready, build your source with `npm run build`
1. Enjoy

## Demo
![Lottie Plugin Demo](https://i.imgur.com/0kBjhTz.gif)


## Summary

* Plugin name: `Lottie-plugin`
* Components
  * `lottie-player`
* Blocks
  * `lottie-player`
...





## Options

|Option|Description|Default|
|-|-|-
|`src`|Source URL of the lottie animation|`null`|





## Download

* CDN
  * `https://unpkg.com/lottie-plugin.min.js`
* NPM
  * `npm i lottie-plugin.min.js`
* GIT
  * `git clone https://github.com/khalifagates/grapejs-lottie-plugin.git`





## Usage

Directly in the browser
```html
<link href="https://unpkg.com/grapesjs/dist/css/grapes.min.css" rel="stylesheet"/>
<script src="https://unpkg.com/grapesjs"></script>
<script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
<script src="path/to/lottie-plugin.min.js"></script>

<div id="gjs"></div>

<script type="text/javascript">
  var editor = grapesjs.init({
      container : '#gjs',
      // ...
      plugins: ['lottie-plugin'],
      pluginsOpts: {
        'lottie-plugin': { /* options */ }
      }
  });
</script>
```

Modern javascript
```js
import grapesjs from 'grapesjs';
import yourPluginName from 'lottie-plugin';

const editor = grapesjs.init({
  container : '#gjs',
  // ...
  plugins: [lottie-plugin],
  pluginsOpts: {
    [lottie-plugin]: { /* options */ }
  }
  // or
  plugins: [
    editor => lottie-plugin(editor, { /* options */ }),
  ],
});
```





## Development

Clone the repository

```sh
$ git clone https://github.com/khalifagates/grapejs-lottie-plugin.git
$ cd grapejs-lottie-plugin
```

Install dependencies

```sh
$ npm i
```

Start the dev server

```sh
$ npm start
```





## License

BSD 3-Clause
