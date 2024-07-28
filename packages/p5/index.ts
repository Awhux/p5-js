import P5 from 'p5'

type CreateP5WrapperProps = {
  setup: (p5: P5) => void
  draw: (p5: P5) => void
  preload?: (p5: P5) => void
  wrapperId?: string
}

export const createP5Wrapper = ({
  setup,
  draw,
  preload,
  wrapperId = 'app',
}: CreateP5WrapperProps) => {
  return new P5((p5: P5) => {
    if (preload) {
      p5.preload = () => preload(p5)
    }

    p5.setup = () => setup(p5)
    p5.draw = () => draw(p5)
  }, document.getElementById(wrapperId)!)
}
