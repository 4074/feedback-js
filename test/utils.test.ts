import { uuid } from '../src/utils'

test('Generate a uuid', () => {
  const id1 = uuid()
  const id2 = uuid()

  expect(id1.length).toBe(36)
  expect(id1).not.toEqual(id2)
})
