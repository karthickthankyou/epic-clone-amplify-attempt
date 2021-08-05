import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import gamesReducer from './gamesSlice'
import publisherReducer from './publishersSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    games: gamesReducer,
    publishers: publisherReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
