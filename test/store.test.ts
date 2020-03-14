import { Store } from '../src/store'
import StorageMock from './storage-mock'

test('set a number', () => {
  const store = new Store('key', null, new StorageMock())
  const number = 0
  store.set('number', number)
  expect(store.get('number')).toBe(number)
})

test('set a array', () => {
  const store = new Store('key', null, new StorageMock())
  const arr = [1, '2', [3], { four: 4 }]
  store.set('arr', arr)
  expect(store.get('arr')).toStrictEqual(arr)
})

test('set a object', () => {
  const store = new Store('key', null, new StorageMock())
  const user = {
    name: 'Tom',
    age: 18
  }
  store.set('user', user)
  expect(store.get('user')).toStrictEqual(user)
})
