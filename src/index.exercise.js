<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:src/index.exercise.js
=======
>>>>>>> exercises/07-context
=======
>>>>>>> exercises/09-performance
import {loadDevTools} from './dev-tools/load'
import './bootstrap'
import * as React from 'react'
import ReactDOM from 'react-dom'
<<<<<<< HEAD
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
=======
import {Profiler} from 'components/profiler'
import {App} from './app'
import {AppProviders} from './context'

loadDevTools(() => {
  ReactDOM.render(
    <Profiler id="App Root" phases={['mount']}>
      <AppProviders>
        <App />
      </AppProviders>
    </Profiler>,
    document.getElementById('root'),
  )
})
>>>>>>> exercises/09-performance
