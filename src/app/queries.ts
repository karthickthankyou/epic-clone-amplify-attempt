/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      displayName
      games {
        items {
          id
          userId
          gameId
          status
          owner
        }
        nextToken
      }
      owner
    }
  }
`
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        displayName
        games {
          nextToken
        }
        owner
      }
      nextToken
    }
  }
`
export const getUserGame = /* GraphQL */ `
  query GetUserGame($id: ID!) {
    getUserGame(id: $id) {
      id
      userId
      gameId
      user {
        id
        username
        displayName
        games {
          nextToken
        }
        owner
      }
      status
      game {
        id
        title
        description
        price
        discount
        releaseDate
        tags
        longDesc
        platform
        languages
        spec
        publisherId
        image
        subimage
        publisher {
          id
          name
        }
      }
      owner
    }
  }
`
export const listUserGames = /* GraphQL */ `
  query ListUserGames(
    $filter: ModelUserGameFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserGames(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        gameId
        user {
          id
          username
          displayName
          owner
        }
        status
        game {
          id
          title
          description
          price
          discount
          releaseDate
          tags
          longDesc
          platform
          languages
          spec
          publisherId
          image
          subimage
        }
        owner
      }
      nextToken
    }
  }
`
export const favoritesByUserAndStatus = /* GraphQL */ `
  query FavoritesByUserAndStatus(
    $userId: ID
    $statusCreatedOn: ModelUserGameListByUserCompositeKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelUserGameFilterInput
    $limit: Int
    $nextToken: String
  ) {
    favoritesByUserAndStatus(
      userId: $userId
      statusCreatedOn: $statusCreatedOn
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        gameId
        user {
          id
          username
          displayName
          owner
        }
        status
        game {
          id
          title
          description
          price
          discount
          releaseDate
          tags
          longDesc
          platform
          languages
          spec
          publisherId
          image
          subimage
        }
        owner
      }
      nextToken
    }
  }
`
export const favoritesByUserAndGame = /* GraphQL */ `
  query FavoritesByUserAndGame(
    $userId: ID
    $gameId: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelUserGameFilterInput
    $limit: Int
    $nextToken: String
  ) {
    favoritesByUserAndGame(
      userId: $userId
      gameId: $gameId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        gameId
        user {
          id
          username
          displayName
          owner
        }
        status
        game {
          id
          title
          description
          price
          discount
          releaseDate
          tags
          longDesc
          platform
          languages
          spec
          publisherId
          image
          subimage
        }
        owner
      }
      nextToken
    }
  }
`
export const getPublisher = /* GraphQL */ `
  query GetPublisher($id: ID!) {
    getPublisher(id: $id) {
      id
      name
      games {
        items {
          id
          title
          description
          price
          discount
          releaseDate
          tags
          longDesc
          platform
          languages
          spec
          publisherId
          image
          subimage
        }
        nextToken
      }
    }
  }
`
export const listPublishers = /* GraphQL */ `
  query ListPublishers(
    $filter: ModelPublisherFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPublishers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        games {
          nextToken
        }
      }
      nextToken
    }
  }
`
export const getGame = /* GraphQL */ `
  query GetGame($id: ID!) {
    getGame(id: $id) {
      id
      title
      description
      price
      discount
      releaseDate
      tags
      longDesc
      platform
      languages
      spec
      publisherId
      image
      subimage
      publisher {
        id
        name
        games {
          nextToken
        }
      }
    }
  }
`
export const listGames = /* GraphQL */ `
  query ListGames(
    $filter: ModelGameFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGames(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        price
        discount
        releaseDate
        tags
        longDesc
        platform
        languages
        spec
        publisherId
        image
        subimage
        publisher {
          id
          name
        }
      }
      nextToken
    }
  }
`
