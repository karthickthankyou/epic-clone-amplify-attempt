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
          createdOn
          updatedOn
          status
          owner
        }
        nextToken
      }
      createdOn
      updatedOn
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
          createdOn
          updatedOn
          status
          owner
        }
        nextToken
      }
      createdOn
      updatedOn
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
          createdOn
          updatedOn
          status
          owner
        }
        nextToken
      }
      createdOn
      updatedOn
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
        createdOn
        updatedOn
        owner
      }
      createdOn
      updatedOn
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
        createdOn
        updatedOn
        publisher {
          id
          name
          createdOn
          updatedOn
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
        createdOn
        updatedOn
        owner
      }
      createdOn
      updatedOn
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
        createdOn
        updatedOn
        publisher {
          id
          name
          createdOn
          updatedOn
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
        createdOn
        updatedOn
        owner
      }
      createdOn
      updatedOn
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
        createdOn
        updatedOn
        publisher {
          id
          name
          createdOn
          updatedOn
        }
      }
      owner
    }
  }
`
