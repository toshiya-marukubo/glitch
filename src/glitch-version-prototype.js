/**
 * @class - glitch class
 * @param {number} width - canvas width
 * @param {number} height - canvas height
 * @param {number} min - split min number
 * @param {number} max - split max number
 */
function Glitch(ctx, width, height, min, max) {
  this.ctx = ctx;
  this.width = width;
  this.height = height;
  this.min = min;
  this.max = max;
  this.imageArr = [];
  this.heightArr = [];
}

/**
 * Get splited image datas.
 * @param {number} t - time
 */
Glitch.prototype.getImageData = function(t) {
  let preHeight = 0;
  let addHeight = 0;
  for (let i = 0; i < this.height; i += addHeight) {
    addHeight = Math.floor((this.max - this.min) * Math.random() + this.min);

    let image = this.ctx.getImageData(0, preHeight, this.width, preHeight + addHeight);

    this.dataArr.push(image);
    this.heightArr.push(preHeight);

    preHeight += addHeight
  }
};

/**
 * Add images on canvas.
 * @param {number} t - time
 */
Glitch.prototype.addImage = function(t) {
  for (let i = 0; i < this.dataArr.length ; i++) {
    if (Math.random() > 0.005) {
      this.ctx.putImageData(
        this.dataArr[i],
        Math.sin(this.heightArr[i] * 0.1 + t) * 3 * Math.random(),
        this.heightArr[i]
      );
    } else {
      this.ctx.putImageData(
        this.dataArr[Math.floor(this.dataArr.length * Math.random())],
        this.width * Math.random() - this.width / 2,
        this.heightArr[i]
      );
    }
  }
};

/**
 * Render images.
 * @param {number} t - time
 */
Glitch.prototype.render = function(t) {
  this.dataArr = [];
  this.heightArr = [];
  this.getImageData(t);
  this.addImage(t);
};
