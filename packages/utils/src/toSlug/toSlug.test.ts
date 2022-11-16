import { toSlug } from './toSlug'

describe('toSlug', () => {
  it('should convert a string to a slug', () => {
    expect(toSlug('Hello World')).toEqual('hello-world')
  })
})
