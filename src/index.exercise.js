<<<<<<< HEAD
<<<<<<<< HEAD:src/index.exercise.js
=======
>>>>>>> exercises/07-context
import {loadDevTools} from './dev-tools/load'
import './bootstrap'
import * as React from 'react'
import ReactDOM from 'react-dom'
<<<<<<< HEAD
import {ReactQueryConfigProvider} from 'react-query'
import {App} from './app'
========
// no final
>>>>>>>> exercises/07-context:src/context/index.js

export * from './index.exercise'

<<<<<<<< HEAD:src/index.exercise.js
loadDevTools(() => {
  ReactDOM.render(
    <ReactQueryConfigProvider config={queryConfig}>
      <App />
    </ReactQueryConfigProvider>,
    document.getElementById('root'),
  )
})
========
// 💯 colocate global providers
// export * from './index.extra-3'
>>>>>>>> exercises/07-context:src/context/index.js
=======
import {AppProviders} from 'context'
import {App} from './app'

loadDevTools(() => {
  ReactDOM.render(
    <AppProviders>
      <App />
    </AppProviders>,
    document.getElementById('root'),
  )
})
>>>>>>> exercises/07-context
