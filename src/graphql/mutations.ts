/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPublisher = /* GraphQL */ `
  mutation CreatePublisher(
    $input: CreatePublisherInput!
    $condition: ModelPublisherConditionInput
  ) {
    createPublisher(input: $input, condition: $condition) {
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
export const updatePublisher = /* GraphQL */ `
  mutation UpdatePublisher(
    $input: UpdatePublisherInput!
    $condition: ModelPublisherConditionInput
  ) {
    updatePublisher(input: $input, condition: $condition) {
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
export const deletePublisher = /* GraphQL */ `
  mutation DeletePublisher(
    $input: DeletePublisherInput!
    $condition: ModelPublisherConditionInput
  ) {
    deletePublisher(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createGame = /* GraphQL */ `
  mutation CreateGame(
    $input: CreateGameInput!
    $condition: ModelGameConditionInput
  ) {
    createGame(input: $input, condition: $condition) {
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
export const updateGame = /* GraphQL */ `
  mutation UpdateGame(
    $input: UpdateGameInput!
    $condition: ModelGameConditionInput
  ) {
    updateGame(input: $input, condition: $condition) {
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
export const deleteGame = /* GraphQL */ `
  mutation DeleteGame(
    $input: DeleteGameInput!
    $condition: ModelGameConditionInput
  ) {
    deleteGame(input: $input, condition: $condition) {
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
export const createUserGame = /* GraphQL */ `
  mutation CreateUserGame(
    $input: CreateUserGameInput!
    $condition: ModelUserGameConditionInput
  ) {
    createUserGame(input: $input, condition: $condition) {
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
export const updateUserGame = /* GraphQL */ `
  mutation UpdateUserGame(
    $input: UpdateUserGameInput!
    $condition: ModelUserGameConditionInput
  ) {
    updateUserGame(input: $input, condition: $condition) {
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
export const deleteUserGame = /* GraphQL */ `
  mutation DeleteUserGame(
    $input: DeleteUserGameInput!
    $condition: ModelUserGameConditionInput
  ) {
    deleteUserGame(input: $input, condition: $condition) {
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
