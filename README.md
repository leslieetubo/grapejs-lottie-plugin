> We highly suggest starting using https://github.com/artf/grapesjs-cli for your new plugin projects

# GrapesJS Lottie Plugin


<span><a href="https://david-dm.org/khalifagates/grapejs-lottie-plugin#info=devDependencies" title="View the status of this project's development dependencies on DavidDM"><img src="https://img.shields.io/david/dev/artf/grapesjs-plugin-boilerplate.svg" alt="Dev Dependency Status" /></a></span>

This is a plugin for grapejs users to implement and manipulate lottie animation on their browsers. Lottie airbnb animations can be found in the lottie market place. For more information, see [Lottie](https://lottiefiles.com). Lottie is not affliated with airbnb, but users all over the world create amazing svg animations.

### Usage
1. Clone this repository `git clone https://github.com/artf/grapesjs-plugin-boilerplate.git Lottie-plugin`
1. Replace in all files `Lottie-plugin` and `grapesjs-lottie-plugin` with your plugin name.
  **The name of your plugin depends on the `name` key in your `package.json`**
1. Update all the data in `package.json`
1. Install dependencies `npm i` and run the local server `npm start`
1. Start creating your plugin from `src/index.js`
1. Show some gif/demo if possible
1. Update README
1. When you're ready, build your source with `npm run build`
1. Publish




## Summary

* Plugin name: `Lottie-plugin`
* Components
  * `new-component1`
  * `new-component2`
* Blocks
  * `new-block1`
  * `new-block1`
...





## Options

|Option|Description|Default|
|-|-|-
|`src`|Source URL of the lottie animation|`null`|





## Download

* CDN
  * `https://unpkg.com/YOUR-PLUGIN-NAME`
* NPM
  * `npm i YOUR-PLUGIN-NAME`
* GIT
  * `git clone https://github.com/YOUR-NAME/YOUR-PLUGIN-NAME.git`





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
    editor => lottie(editor, { /* options */ }),
  ],
});
```





## Development

Clone the repository

```sh
$ git clone https://github.com/YOUR-NAME/YOUR-PLUGIN-NAME.git
$ cd Lottie
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
