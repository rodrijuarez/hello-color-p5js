var sketch = (p: p5) => {
  p.preload = () => {};

  p.setup = () => {
    p.createCanvas(720, 720);
    p.noCursor();
  };

  p.windowResized = () => {
    p.resizeCanvas(720, 720);
  };

  p.draw = () => {
    p.colorMode(p.HSB, 360, 100, 100);
    p.rectMode(p.CENTER);
    p.noStroke();
    p.background(p.mouseY / 2, 100, 100);

    p.fill(360 - p.mouseY / 2, 100, 100);
    p.rect(360, 360, p.mouseX + 1, p.mouseX + 1);
  };
};

var sketchP = new p5(sketch);
