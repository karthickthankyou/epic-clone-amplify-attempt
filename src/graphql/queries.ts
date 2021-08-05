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
          createdOn
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
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
        createdAt
        updatedAt
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
        createdAt
        updatedAt
        owner
      }
      status
      createdOn
      createdAt
      updatedAt
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
        createdAt
        updatedAt
        publisher {
          id
          name
          createdAt
          updatedAt
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
          createdAt
          updatedAt
          owner
        }
        status
        createdOn
        createdAt
        updatedAt
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
          createdAt
          updatedAt
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
          createdAt
          updatedAt
          owner
        }
        status
        createdOn
        createdAt
        updatedAt
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
          createdAt
          updatedAt
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
          createdAt
          updatedAt
          owner
        }
        status
        createdOn
        createdAt
        updatedAt
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
          createdAt
          updatedAt
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
      createdAt
      updatedAt
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
          createdAt
          updatedAt
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
        createdAt
        updatedAt
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
      createdAt
      updatedAt
      publisher {
        id
        name
        createdAt
        updatedAt
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
        createdAt
        updatedAt
        publisher {
          id
          name
          createdAt
          updatedAt
        }
      }
      nextToken
    }
  }
`
