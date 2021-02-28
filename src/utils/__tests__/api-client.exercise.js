import {server, rest} from 'test/server'
import {client} from '../api-client'

const apiURL = process.env.REACT_APP_API_URL

// enable API mocking in test runs using the same request handlers
// as for the client-side mocking.
beforeAll(() => server.listen())
afterAll(() => server.close())
afterEach(() => server.resetHandlers())

test('makes GET requests to the given endpoint', async () => {
  const endpoint = 'test-endpoint'
  const mockResult = {mockValue: 'VALUE'}
  server.use(
    rest.get(`${apiURL}/${endpoint}`, async (req, res, ctx) => {
      return res(ctx.json(mockResult))
    }),
  )

  const result = await client(endpoint)

  expect(result).toEqual(mockResult)
})

test('adds auth token when a token is provided', async () => {
  const token = 'FAKE_TOKEN'

  let request
  const endpoint = 'test-endpoint'
  const mockResult = {mockValue: 'VALUE'}
  server.use(
    rest.get(`${apiURL}/${endpoint}`, async (req, res, ctx) => {
      request = req
      return res(ctx.json(mockResult))
    }),
  )

  await client(endpoint, {token})

  expect(request.headers.get('Authorization')).toBe(`Bearer ${token}`)
})

test('allows for config overrides', () => {
  // 🐨 do a very similar setup to the previous test
  // 🐨 create a custom config that specifies properties like "mode" of "cors" and a custom header
  // 🐨 call the client with the endpoint and the custom config
  // 🐨 verify the request had the correct properties
})

test('when data is provided, it is stringified and the method defaults to POST', () => {
  // 🐨 create a mock data object
  // 🐨 create a server handler very similar to the previous ones to handle the post request
  //    💰 Use rest.post instead of rest.get like we've been doing so far
  // 🐨 call client with an endpoint and an object with the data
  //    💰 client(endpoint, {data})
  // 🐨 verify the request.body is equal to the mock data object you passed
})
