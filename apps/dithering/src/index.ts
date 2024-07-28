import { createP5Wrapper } from '@p5-js/p5'
import P5 from 'p5'

let angle = 0

function setup(p5: P5) {
  p5.createCanvas(400, 400)
}

function draw(p5: P5) {
  p5.background(60)

  p5.translate(p5.width / 2, p5.height / 2)
  p5.rotate(angle)
  p5.rect(0, 0, 100, 100)
  angle += 0.01
}

createP5Wrapper({ setup, draw })
