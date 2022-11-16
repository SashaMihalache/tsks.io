import { toSlug } from './toSlug'

describe('toSlug', () => {
  it('should convert a string to a slug with dashes', () => {
    expect(toSlug('Hello World')).toEqual('hello-world')
  })
})
