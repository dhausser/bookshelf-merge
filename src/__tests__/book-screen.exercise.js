import * as React from 'react'
import {render, screen, waitFor} from '@testing-library/react'
import {queryCache} from 'react-query'
import {buildUser, buildBook} from 'test/generate'
import * as auth from 'auth-provider'
import {AppProviders} from 'context'
import {App} from 'app'

afterEach(() => {
  queryCache.clear()
  auth.logout()
})

test('renders all the book information', () => {
  localStorage.setItem('localStorageKey', auth.localStorageKey)

  const user = buildUser()
  const book = buildBook()
  window.history.pushState({}, 'book', `/book/${book.id}`)

  window.fetch = async (url, config) => {
    switch (url) {
      case `/me`: {
        return Promise.resolve({ok: true, json: async () => ({user})})
      }
      case `/list-items`: {
        return Promise.resolve({ok: true, json: async () => ({listItems: []})})
      }
      case `/book/${book.id}`: {
        return Promise.resolve({ok: true, json: async () => ({book})})
      }
      default: {
        break
      }
    }
  }

  const {container} = render(<App />, {wrapper: <AppProviders />})

  waitFor(() => {
    if (queryCache.isFetching) {
      throw new Error('Still fetching')
    }
  })

  screen.debug()
})
