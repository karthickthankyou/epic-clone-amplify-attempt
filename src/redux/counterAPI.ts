/* eslint-disable import/prefer-default-export */

import { API } from 'aws-amplify'
import { listGames, listPublishers } from '../app/queries'

// A mock function to mimic making an async request for data
export const fetchCount = (amount = 1) =>
  new Promise<{ data: number }>((resolve) =>
    setTimeout(() => resolve({ data: amount }), 1000)
  )

export const fetchGames = async () =>
  API.graphql({
    query: listGames,
    // @ts-ignore as aws requires to import import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api-graphql/lib/types'; to use API_KEY enum.
    authMode: 'API_KEY',
  })

export const fetchPublishers = async () =>
  API.graphql({
    query: listPublishers,
    // @ts-ignore as aws requires to import import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api-graphql/lib/types'; to use API_KEY enum.
    authMode: 'API_KEY',
  })
