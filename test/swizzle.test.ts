import Swizzle from '../src/swizzle'

class SwizzleTest {
  static plusOne(n: number): number {
    return n + 1
  }

  // eslint-disable-next-line class-methods-use-this
  multipleTwo(n: number): number {
    return n * 2
  }
}

test('Add & remove a function', () => {
  const swizzleTestInstance = new SwizzleTest()
  const swizzled = (origin: Function) => {
    return (n: number): number => {
      return origin(n * 2)
    }
  }
  Swizzle.add(swizzleTestInstance, 'multipleTwo', swizzled)
  expect(swizzleTestInstance.multipleTwo(1)).toBe(4)

  Swizzle.remove(swizzleTestInstance, 'multipleTwo', swizzled)
  expect(swizzleTestInstance.multipleTwo(1)).toBe(2)
})

test('Add & remove a static function', () => {
  const swizzled = (origin: Function) => {
    return (n: number): number => {
      return origin(n + 1)
    }
  }
  Swizzle.add(SwizzleTest, 'plusOne', swizzled)
  expect(SwizzleTest.plusOne(1)).toBe(3)

  Swizzle.remove(SwizzleTest, 'plusOne', swizzled)
  expect(SwizzleTest.plusOne(1)).toBe(2)
})
