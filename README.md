# Dynamic Player

A small library to play multimedia (video/audio) on scroll.

---

## Getting started

For this library get to work, you'll have to follow some steps.

### 1. Include Dynamic Player on your site

You can [download it directly from GitHub](github.com)

```html
<script src="/path/to/DynamicPlayer.js"></script>
```

### 2. Add the markup to your HTML

```html
<body>
  ...
  <video id="my-video" controls>
    <source src="./my/video/path.mp4" />
  </video>
  ...
</body>
```

### 3. Initialize DynamicScroll w/ multimedia options object

```js
const multimediaOptions = {
  selector: '#my-video',
  playOnCoords: { x: 0, y: 1230 }
  // Video will play when the user scrolls vertically 1230 pixels
};

const myVideo = new DynamicPlayer(multimediaOptions);
myVideo.init();
```

## Browser compatibility

---

Dynamic Player works in all moderns browsers. It's built using ES6 classes, so it doesn't work on IE (yet).

## TODO

---

[ ] Add demo
[ ] Minified version
[ ] Internet Explorer support
[ ] Send an array of multimedia objects as contructor
[ ] CDN link
[ ] NPM package

## License

---

The code is available under [MIT License](https://github.com/vitorfreitas/dynamic-player/blob/master/LICENSE).
