import { Heading } from '../Heading'

describe('element is', () => {
  it('h1 by default', () => {
    const { type } = Heading({})
    expect(type).toBe('h1')
  })

  it('or matches size', () => {
    const { type } = Heading({ size: 3 })
    expect(type).toBe(`h3`)
  })

  it('or uses the provided element', () => {
    const { type } = Heading({ as: 'h2' })
    expect(type).toBe(`h2`)
  })

  it('but "as" has priority if both size or as set', () => {
    const { type } = Heading({ size: 3, as: 'h5' })
    expect(type).toBe(`h5`)
  })
})
