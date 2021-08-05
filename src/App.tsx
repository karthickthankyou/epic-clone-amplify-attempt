import { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Amplify from 'aws-amplify'
import * as Sentry from '@sentry/react'
import { Integrations } from '@sentry/tracing'
import { useSelector } from 'react-redux'

import Wishlist from './components/pages/Wishlist'
import { useAppSelector, useAppDispatch } from './redux/hooks'
import { RootState } from './redux/store'
import { fetchGamesAsync } from './redux/gamesSlice'
import { fetchPublishersAsync } from './redux/publishersSlice'
import { selectCount, increment, decrement } from './redux/counterSlice'

import awsExports from './aws-exports'

Amplify.configure(awsExports)

Sentry.init({
  dsn: 'https://328cd4dd819c4063b6b6bbc2011da141@o927079.ingest.sentry.io/5876511',
  integrations: [new Integrations.BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
})

function App() {
  const count = useAppSelector(selectCount)
  const allGames = useSelector((state: RootState) => state.games)
  const allPublishers = useSelector((state: RootState) => state.publishers)

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchPublishersAsync())
  }, [])

  return (
    <Router>
      <div>Heading</div>
      {JSON.stringify(allGames)}
      {JSON.stringify(allPublishers)}
      <button
        type='button'
        className='btn btn-lg '
        onClick={() => dispatch(increment())}
      >
        increment {count}
      </button>
      <button
        type='button'
        className='btn btn-lg '
        onClick={() => dispatch(decrement())}
      >
        decrement {count}
      </button>
      <hr />
      <hr />
      {JSON.stringify(allGames)}
      <hr />
      <button type='button' onClick={() => dispatch(fetchGamesAsync())}>
        Dispatch fetchGames
      </button>
      <hr />
      <button type='button' onClick={() => dispatch(fetchPublishersAsync())}>
        Dispatch publishers
      </button>
      <hr />
      <hr />

      <Sentry.ErrorBoundary showDialog fallback='An error has occurred!'>
        <button
          type='button'
          onClick={() => {
            throw new Error('Error for sentry')
          }}
        >
          Break the world
        </button>
      </Sentry.ErrorBoundary>

      <Switch>
        <Route exact path='/'>
          Hi
        </Route>
        <Route path='/cart'>Cart</Route>
        <Route path='/checkout'>Checkout</Route>
        <Route path='/wishlist'>
          <Wishlist />
        </Route>
      </Switch>
      <div className='p-5 text-red-600 bg-yellow-300'>Hello World</div>
    </Router>
  )
}

export default App
