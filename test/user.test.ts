import User from '../src/user'

test('Generate a user instance', () => {
  const user = new User()

  expect(user.uuid.length).toBe(36)
})

test('Set & get user props', () => {
  const user = new User()
  user.props('zero', 0)

  expect(user.props('zero')).toBe(0)
})

test('Set & get user props by object', () => {
  const user = new User()
  user.props({
    zero: 0,
    one: 1
  })

  expect(user.props('zero')).toBe(0)
  expect(user.props('one')).toBe(1)
})
