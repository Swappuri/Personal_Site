class CollisionBlock {
  constructor(x, y, blockType, c) {
    this.position = {
      x: x,
      y: y
    };

    this.width = 16;
    this.height = 16;
    this.blockType = blockType;
    this.c = c;
  }

  draw() {
    // if (this.blockType === 237) {
    //   this.c.fillStyle = "rgba(0, 0, 0, 0.5)";
    // } 
    // else if (this.blockType === 238) {
    //   this.c.fillStyle = "rgba(255, 0, 0, 0.5)";
    // }
    // else {
    //   this.c.fillStyle = "rgba(0, 255, 0, 0.5)";
    // }
    this.c.fillStyle = "rgba(0, 0, 0, 0)";
    this.c.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
}