import {formatDate} from '../misc'

test('formatDate formats the date to look nice', () => {
  expect(formatDate(new Date('May 10, 1988'))).toBe('May 88')
})
