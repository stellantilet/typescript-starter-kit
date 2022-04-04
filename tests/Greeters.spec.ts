import { Greeters } from '../src/index'

describe('Greeters', () => {
  let greeters
  beforeAll(async () => {
    greeters = new Greeters()
  })
  it('sayHelloTo', () => {
    expect(greeters.sayHelloTo('Tester')).toEqual('Hello Tester')
  })
})
