import {formatDate} from 'utils/misc'

test('formatDate formats the date to look nice', () => {
  const date = new Date()
  expect(formatDate(date)).toBe('Feb 21')
})
