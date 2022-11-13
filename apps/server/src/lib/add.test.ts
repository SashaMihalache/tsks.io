import add from './add'

describe('add', () => {
  it('should add two numbers', () => {
    expect(add(1, 3)).toEqual(4)
  })
})
