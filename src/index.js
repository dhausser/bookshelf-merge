<<<<<<< HEAD
// export * from './index.final'

export * from './index.exercise'

// 💯 make a loading spinner component
// export * from './index.extra-3'
=======
import {loadDevTools} from './dev-tools/load'
import './bootstrap'
import * as React from 'react'
import ReactDOM from 'react-dom'
import {DiscoverBooksScreen} from './discover'

loadDevTools(() => {
  ReactDOM.render(<DiscoverBooksScreen />, document.getElementById('root'))
})
>>>>>>> exercises/03-data-fetching
