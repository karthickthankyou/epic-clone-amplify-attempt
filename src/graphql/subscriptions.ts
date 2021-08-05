/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($owner: String) {
    onCreateUser(owner: $owner) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($owner: String) {
    onUpdateUser(owner: $owner) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($owner: String) {
    onDeleteUser(owner: $owner) {
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
export const onCreateUserGame = /* GraphQL */ `
  subscription OnCreateUserGame($owner: String) {
    onCreateUserGame(owner: $owner) {
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
export const onUpdateUserGame = /* GraphQL */ `
  subscription OnUpdateUserGame($owner: String) {
    onUpdateUserGame(owner: $owner) {
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
export const onDeleteUserGame = /* GraphQL */ `
  subscription OnDeleteUserGame($owner: String) {
    onDeleteUserGame(owner: $owner) {
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
