# Glitch
It is be able to add glitch effect to canvas.  
Demo on CodePen [https://codepen.io/toshiya-marukubo/full/ExvzLxJ](https://codepen.io/toshiya-marukubo/full/ExvzLxJ) 
## How to use
It is easy to use it.
- Parameters
  - ctx : canvas context
  - width : canvas width
  - height : canvas height
  - min : min split number
  - max : max split number
  - t : time or frame
```
// load script file
<script src="./glitch-prototype-version.js"></script>

// on main program
function init() {
  ...
  ...
  ...

  glitch = new Glitch(ctx, width, height, min, max);
  
  ...
  ...
  ...
}

function draw() {
  ...
  ...
  ...

  glitch.render(t);  // t is time or frame

  requestAnimationFrame(draw);
}
```
### License
MIT
