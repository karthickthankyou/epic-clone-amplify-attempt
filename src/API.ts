/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreatePublisherInput = {
  id?: string | null
  name: string
}

export type ModelPublisherConditionInput = {
  name?: ModelStringInput | null
  and?: Array<ModelPublisherConditionInput | null> | null
  or?: Array<ModelPublisherConditionInput | null> | null
  not?: ModelPublisherConditionInput | null
}

export type ModelStringInput = {
  ne?: string | null
  eq?: string | null
  le?: string | null
  lt?: string | null
  ge?: string | null
  gt?: string | null
  contains?: string | null
  notContains?: string | null
  between?: Array<string | null> | null
  beginsWith?: string | null
  attributeExists?: boolean | null
  attributeType?: ModelAttributeTypes | null
  size?: ModelSizeInput | null
}

export enum ModelAttributeTypes {
  binary = 'binary',
  binarySet = 'binarySet',
  bool = 'bool',
  list = 'list',
  map = 'map',
  number = 'number',
  numberSet = 'numberSet',
  string = 'string',
  stringSet = 'stringSet',
  _null = '_null',
}

export type ModelSizeInput = {
  ne?: number | null
  eq?: number | null
  le?: number | null
  lt?: number | null
  ge?: number | null
  gt?: number | null
  between?: Array<number | null> | null
}

export type Publisher = {
  __typename: 'Publisher'
  id: string
  name: string
  createdAt: string
  updatedAt: string
  games?: ModelGameConnection | null
}

export type ModelGameConnection = {
  __typename: 'ModelGameConnection'
  items?: Array<Game | null> | null
  nextToken?: string | null
}

export type Game = {
  __typename: 'Game'
  id: string
  title: string
  description?: string | null
  price: number
  discount?: number | null
  releaseDate: string
  tags: Array<GameGenre | null>
  longDesc?: string | null
  platform?: string | null
  languages?: string | null
  spec?: string | null
  publisherId: string
  image?: string | null
  subimage?: string | null
  createdAt: string
  updatedAt: string
  publisher?: Publisher | null
}

export enum GameGenre {
  Action = 'Action',
  Adventure = 'Adventure',
  Indie = 'Indie',
  RPG = 'RPG',
  Strategy = 'Strategy',
  OpenWorld = 'OpenWorld',
  Shooter = 'Shooter',
  Puzzle = 'Puzzle',
  FirstPerson = 'FirstPerson',
  Narration = 'Narration',
  Simulation = 'Simulation',
  Casual = 'Casual',
  TurnBased = 'TurnBased',
  Exploration = 'Exploration',
  Horror = 'Horror',
  Platformer = 'Platformer',
  Party = 'Party',
  Survival = 'Survival',
  Trivia = 'Trivia',
  CityBuilder = 'CityBuilder',
  Stealth = 'Stealth',
  Fighting = 'Fighting',
  Comedy = 'Comedy',
  ActionAdventure = 'ActionAdventure',
  Racing = 'Racing',
  RogueLite = 'RogueLite',
  CardGame = 'CardGame',
  Game = 'Game',
  Sports = 'Sports',
}

export type UpdatePublisherInput = {
  id: string
  name?: string | null
}

export type DeletePublisherInput = {
  id: string
}

export type CreateUserInput = {
  id?: string | null
  username: string
  displayName: string
}

export type ModelUserConditionInput = {
  username?: ModelStringInput | null
  displayName?: ModelStringInput | null
  and?: Array<ModelUserConditionInput | null> | null
  or?: Array<ModelUserConditionInput | null> | null
  not?: ModelUserConditionInput | null
}

export type User = {
  __typename: 'User'
  id: string
  username: string
  displayName: string
  games?: ModelUserGameConnection | null
  createdAt: string
  updatedAt: string
  owner?: string | null
}

export type ModelUserGameConnection = {
  __typename: 'ModelUserGameConnection'
  items?: Array<UserGame | null> | null
  nextToken?: string | null
}

export type UserGame = {
  __typename: 'UserGame'
  id: string
  userId: string
  gameId: string
  user?: User | null
  status?: GameListType | null
  createdOn?: string | null
  createdAt: string
  updatedAt: string
  game?: Game | null
  owner?: string | null
}

export enum GameListType {
  Wishlisted = 'Wishlisted',
  InCart = 'InCart',
  Purchased = 'Purchased',
}

export type UpdateUserInput = {
  id: string
  username?: string | null
  displayName?: string | null
}

export type DeleteUserInput = {
  id: string
}

export type CreateGameInput = {
  id?: string | null
  title: string
  description?: string | null
  price: number
  discount?: number | null
  releaseDate: string
  tags: Array<GameGenre | null>
  longDesc?: string | null
  platform?: string | null
  languages?: string | null
  spec?: string | null
  publisherId: string
  image?: string | null
  subimage?: string | null
  publisherGamesId?: string | null
  gamePublisherId?: string | null
}

export type ModelGameConditionInput = {
  title?: ModelStringInput | null
  description?: ModelStringInput | null
  price?: ModelFloatInput | null
  discount?: ModelFloatInput | null
  releaseDate?: ModelStringInput | null
  tags?: ModelGameGenreListInput | null
  longDesc?: ModelStringInput | null
  platform?: ModelStringInput | null
  languages?: ModelStringInput | null
  spec?: ModelStringInput | null
  publisherId?: ModelIDInput | null
  image?: ModelStringInput | null
  subimage?: ModelStringInput | null
  and?: Array<ModelGameConditionInput | null> | null
  or?: Array<ModelGameConditionInput | null> | null
  not?: ModelGameConditionInput | null
}

export type ModelFloatInput = {
  ne?: number | null
  eq?: number | null
  le?: number | null
  lt?: number | null
  ge?: number | null
  gt?: number | null
  between?: Array<number | null> | null
  attributeExists?: boolean | null
  attributeType?: ModelAttributeTypes | null
}

export type ModelGameGenreListInput = {
  eq?: Array<GameGenre | null> | null
  ne?: Array<GameGenre | null> | null
  contains?: GameGenre | null
  notContains?: GameGenre | null
}

export type ModelIDInput = {
  ne?: string | null
  eq?: string | null
  le?: string | null
  lt?: string | null
  ge?: string | null
  gt?: string | null
  contains?: string | null
  notContains?: string | null
  between?: Array<string | null> | null
  beginsWith?: string | null
  attributeExists?: boolean | null
  attributeType?: ModelAttributeTypes | null
  size?: ModelSizeInput | null
}

export type UpdateGameInput = {
  id: string
  title?: string | null
  description?: string | null
  price?: number | null
  discount?: number | null
  releaseDate?: string | null
  tags?: Array<GameGenre | null> | null
  longDesc?: string | null
  platform?: string | null
  languages?: string | null
  spec?: string | null
  publisherId?: string | null
  image?: string | null
  subimage?: string | null
  publisherGamesId?: string | null
  gamePublisherId?: string | null
}

export type DeleteGameInput = {
  id: string
}

export type CreateUserGameInput = {
  id?: string | null
  userId: string
  gameId: string
  status?: GameListType | null
  createdOn?: string | null
}

export type ModelUserGameConditionInput = {
  userId?: ModelIDInput | null
  gameId?: ModelIDInput | null
  status?: ModelGameListTypeInput | null
  createdOn?: ModelStringInput | null
  and?: Array<ModelUserGameConditionInput | null> | null
  or?: Array<ModelUserGameConditionInput | null> | null
  not?: ModelUserGameConditionInput | null
}

export type ModelGameListTypeInput = {
  eq?: GameListType | null
  ne?: GameListType | null
}

export type UpdateUserGameInput = {
  id: string
  userId?: string | null
  gameId?: string | null
  status?: GameListType | null
  createdOn?: string | null
}

export type DeleteUserGameInput = {
  id: string
}

export type ModelUserFilterInput = {
  id?: ModelIDInput | null
  username?: ModelStringInput | null
  displayName?: ModelStringInput | null
  and?: Array<ModelUserFilterInput | null> | null
  or?: Array<ModelUserFilterInput | null> | null
  not?: ModelUserFilterInput | null
}

export type ModelUserConnection = {
  __typename: 'ModelUserConnection'
  items?: Array<User | null> | null
  nextToken?: string | null
}

export type ModelUserGameFilterInput = {
  id?: ModelIDInput | null
  userId?: ModelIDInput | null
  gameId?: ModelIDInput | null
  status?: ModelGameListTypeInput | null
  createdOn?: ModelStringInput | null
  and?: Array<ModelUserGameFilterInput | null> | null
  or?: Array<ModelUserGameFilterInput | null> | null
  not?: ModelUserGameFilterInput | null
}

export type ModelUserGameListByUserCompositeKeyConditionInput = {
  eq?: ModelUserGameListByUserCompositeKeyInput | null
  le?: ModelUserGameListByUserCompositeKeyInput | null
  lt?: ModelUserGameListByUserCompositeKeyInput | null
  ge?: ModelUserGameListByUserCompositeKeyInput | null
  gt?: ModelUserGameListByUserCompositeKeyInput | null
  between?: Array<ModelUserGameListByUserCompositeKeyInput | null> | null
  beginsWith?: ModelUserGameListByUserCompositeKeyInput | null
}

export type ModelUserGameListByUserCompositeKeyInput = {
  status?: GameListType | null
  createdOn?: string | null
}

export enum ModelSortDirection {
  ASC = 'ASC',
  DESC = 'DESC',
}

export type ModelIDKeyConditionInput = {
  eq?: string | null
  le?: string | null
  lt?: string | null
  ge?: string | null
  gt?: string | null
  between?: Array<string | null> | null
  beginsWith?: string | null
}

export type ModelPublisherFilterInput = {
  id?: ModelIDInput | null
  name?: ModelStringInput | null
  and?: Array<ModelPublisherFilterInput | null> | null
  or?: Array<ModelPublisherFilterInput | null> | null
  not?: ModelPublisherFilterInput | null
}

export type ModelPublisherConnection = {
  __typename: 'ModelPublisherConnection'
  items?: Array<Publisher | null> | null
  nextToken?: string | null
}

export type ModelGameFilterInput = {
  id?: ModelIDInput | null
  title?: ModelStringInput | null
  description?: ModelStringInput | null
  price?: ModelFloatInput | null
  discount?: ModelFloatInput | null
  releaseDate?: ModelStringInput | null
  tags?: ModelGameGenreListInput | null
  longDesc?: ModelStringInput | null
  platform?: ModelStringInput | null
  languages?: ModelStringInput | null
  spec?: ModelStringInput | null
  publisherId?: ModelIDInput | null
  image?: ModelStringInput | null
  subimage?: ModelStringInput | null
  and?: Array<ModelGameFilterInput | null> | null
  or?: Array<ModelGameFilterInput | null> | null
  not?: ModelGameFilterInput | null
}

export type CreatePublisherMutationVariables = {
  input: CreatePublisherInput
  condition?: ModelPublisherConditionInput | null
}

export type CreatePublisherMutation = {
  createPublisher?: {
    __typename: 'Publisher'
    id: string
    name: string
    createdAt: string
    updatedAt: string
    games?: {
      __typename: 'ModelGameConnection'
      items?: Array<{
        __typename: 'Game'
        id: string
        title: string
        description?: string | null
        price: number
        discount?: number | null
        releaseDate: string
        tags: Array<GameGenre | null>
        longDesc?: string | null
        platform?: string | null
        languages?: string | null
        spec?: string | null
        publisherId: string
        image?: string | null
        subimage?: string | null
        createdAt: string
        updatedAt: string
      } | null> | null
      nextToken?: string | null
    } | null
  } | null
}

export type UpdatePublisherMutationVariables = {
  input: UpdatePublisherInput
  condition?: ModelPublisherConditionInput | null
}

export type UpdatePublisherMutation = {
  updatePublisher?: {
    __typename: 'Publisher'
    id: string
    name: string
    createdAt: string
    updatedAt: string
    games?: {
      __typename: 'ModelGameConnection'
      items?: Array<{
        __typename: 'Game'
        id: string
        title: string
        description?: string | null
        price: number
        discount?: number | null
        releaseDate: string
        tags: Array<GameGenre | null>
        longDesc?: string | null
        platform?: string | null
        languages?: string | null
        spec?: string | null
        publisherId: string
        image?: string | null
        subimage?: string | null
        createdAt: string
        updatedAt: string
      } | null> | null
      nextToken?: string | null
    } | null
  } | null
}

export type DeletePublisherMutationVariables = {
  input: DeletePublisherInput
  condition?: ModelPublisherConditionInput | null
}

export type DeletePublisherMutation = {
  deletePublisher?: {
    __typename: 'Publisher'
    id: string
    name: string
    createdAt: string
    updatedAt: string
    games?: {
      __typename: 'ModelGameConnection'
      items?: Array<{
        __typename: 'Game'
        id: string
        title: string
        description?: string | null
        price: number
        discount?: number | null
        releaseDate: string
        tags: Array<GameGenre | null>
        longDesc?: string | null
        platform?: string | null
        languages?: string | null
        spec?: string | null
        publisherId: string
        image?: string | null
        subimage?: string | null
        createdAt: string
        updatedAt: string
      } | null> | null
      nextToken?: string | null
    } | null
  } | null
}

export type CreateUserMutationVariables = {
  input: CreateUserInput
  condition?: ModelUserConditionInput | null
}

export type CreateUserMutation = {
  createUser?: {
    __typename: 'User'
    id: string
    username: string
    displayName: string
    games?: {
      __typename: 'ModelUserGameConnection'
      items?: Array<{
        __typename: 'UserGame'
        id: string
        userId: string
        gameId: string
        status?: GameListType | null
        createdOn?: string | null
        createdAt: string
        updatedAt: string
        owner?: string | null
      } | null> | null
      nextToken?: string | null
    } | null
    createdAt: string
    updatedAt: string
    owner?: string | null
  } | null
}

export type UpdateUserMutationVariables = {
  input: UpdateUserInput
  condition?: ModelUserConditionInput | null
}

export type UpdateUserMutation = {
  updateUser?: {
    __typename: 'User'
    id: string
    username: string
    displayName: string
    games?: {
      __typename: 'ModelUserGameConnection'
      items?: Array<{
        __typename: 'UserGame'
        id: string
        userId: string
        gameId: string
        status?: GameListType | null
        createdOn?: string | null
        createdAt: string
        updatedAt: string
        owner?: string | null
      } | null> | null
      nextToken?: string | null
    } | null
    createdAt: string
    updatedAt: string
    owner?: string | null
  } | null
}

export type DeleteUserMutationVariables = {
  input: DeleteUserInput
  condition?: ModelUserConditionInput | null
}

export type DeleteUserMutation = {
  deleteUser?: {
    __typename: 'User'
    id: string
    username: string
    displayName: string
    games?: {
      __typename: 'ModelUserGameConnection'
      items?: Array<{
        __typename: 'UserGame'
        id: string
        userId: string
        gameId: string
        status?: GameListType | null
        createdOn?: string | null
        createdAt: string
        updatedAt: string
        owner?: string | null
      } | null> | null
      nextToken?: string | null
    } | null
    createdAt: string
    updatedAt: string
    owner?: string | null
  } | null
}

export type CreateGameMutationVariables = {
  input: CreateGameInput
  condition?: ModelGameConditionInput | null
}

export type CreateGameMutation = {
  createGame?: {
    __typename: 'Game'
    id: string
    title: string
    description?: string | null
    price: number
    discount?: number | null
    releaseDate: string
    tags: Array<GameGenre | null>
    longDesc?: string | null
    platform?: string | null
    languages?: string | null
    spec?: string | null
    publisherId: string
    image?: string | null
    subimage?: string | null
    createdAt: string
    updatedAt: string
    publisher?: {
      __typename: 'Publisher'
      id: string
      name: string
      createdAt: string
      updatedAt: string
      games?: {
        __typename: 'ModelGameConnection'
        nextToken?: string | null
      } | null
    } | null
  } | null
}

export type UpdateGameMutationVariables = {
  input: UpdateGameInput
  condition?: ModelGameConditionInput | null
}

export type UpdateGameMutation = {
  updateGame?: {
    __typename: 'Game'
    id: string
    title: string
    description?: string | null
    price: number
    discount?: number | null
    releaseDate: string
    tags: Array<GameGenre | null>
    longDesc?: string | null
    platform?: string | null
    languages?: string | null
    spec?: string | null
    publisherId: string
    image?: string | null
    subimage?: string | null
    createdAt: string
    updatedAt: string
    publisher?: {
      __typename: 'Publisher'
      id: string
      name: string
      createdAt: string
      updatedAt: string
      games?: {
        __typename: 'ModelGameConnection'
        nextToken?: string | null
      } | null
    } | null
  } | null
}

export type DeleteGameMutationVariables = {
  input: DeleteGameInput
  condition?: ModelGameConditionInput | null
}

export type DeleteGameMutation = {
  deleteGame?: {
    __typename: 'Game'
    id: string
    title: string
    description?: string | null
    price: number
    discount?: number | null
    releaseDate: string
    tags: Array<GameGenre | null>
    longDesc?: string | null
    platform?: string | null
    languages?: string | null
    spec?: string | null
    publisherId: string
    image?: string | null
    subimage?: string | null
    createdAt: string
    updatedAt: string
    publisher?: {
      __typename: 'Publisher'
      id: string
      name: string
      createdAt: string
      updatedAt: string
      games?: {
        __typename: 'ModelGameConnection'
        nextToken?: string | null
      } | null
    } | null
  } | null
}

export type CreateUserGameMutationVariables = {
  input: CreateUserGameInput
  condition?: ModelUserGameConditionInput | null
}

export type CreateUserGameMutation = {
  createUserGame?: {
    __typename: 'UserGame'
    id: string
    userId: string
    gameId: string
    user?: {
      __typename: 'User'
      id: string
      username: string
      displayName: string
      games?: {
        __typename: 'ModelUserGameConnection'
        nextToken?: string | null
      } | null
      createdAt: string
      updatedAt: string
      owner?: string | null
    } | null
    status?: GameListType | null
    createdOn?: string | null
    createdAt: string
    updatedAt: string
    game?: {
      __typename: 'Game'
      id: string
      title: string
      description?: string | null
      price: number
      discount?: number | null
      releaseDate: string
      tags: Array<GameGenre | null>
      longDesc?: string | null
      platform?: string | null
      languages?: string | null
      spec?: string | null
      publisherId: string
      image?: string | null
      subimage?: string | null
      createdAt: string
      updatedAt: string
      publisher?: {
        __typename: 'Publisher'
        id: string
        name: string
        createdAt: string
        updatedAt: string
      } | null
    } | null
    owner?: string | null
  } | null
}

export type UpdateUserGameMutationVariables = {
  input: UpdateUserGameInput
  condition?: ModelUserGameConditionInput | null
}

export type UpdateUserGameMutation = {
  updateUserGame?: {
    __typename: 'UserGame'
    id: string
    userId: string
    gameId: string
    user?: {
      __typename: 'User'
      id: string
      username: string
      displayName: string
      games?: {
        __typename: 'ModelUserGameConnection'
        nextToken?: string | null
      } | null
      createdAt: string
      updatedAt: string
      owner?: string | null
    } | null
    status?: GameListType | null
    createdOn?: string | null
    createdAt: string
    updatedAt: string
    game?: {
      __typename: 'Game'
      id: string
      title: string
      description?: string | null
      price: number
      discount?: number | null
      releaseDate: string
      tags: Array<GameGenre | null>
      longDesc?: string | null
      platform?: string | null
      languages?: string | null
      spec?: string | null
      publisherId: string
      image?: string | null
      subimage?: string | null
      createdAt: string
      updatedAt: string
      publisher?: {
        __typename: 'Publisher'
        id: string
        name: string
        createdAt: string
        updatedAt: string
      } | null
    } | null
    owner?: string | null
  } | null
}

export type DeleteUserGameMutationVariables = {
  input: DeleteUserGameInput
  condition?: ModelUserGameConditionInput | null
}

export type DeleteUserGameMutation = {
  deleteUserGame?: {
    __typename: 'UserGame'
    id: string
    userId: string
    gameId: string
    user?: {
      __typename: 'User'
      id: string
      username: string
      displayName: string
      games?: {
        __typename: 'ModelUserGameConnection'
        nextToken?: string | null
      } | null
      createdAt: string
      updatedAt: string
      owner?: string | null
    } | null
    status?: GameListType | null
    createdOn?: string | null
    createdAt: string
    updatedAt: string
    game?: {
      __typename: 'Game'
      id: string
      title: string
      description?: string | null
      price: number
      discount?: number | null
      releaseDate: string
      tags: Array<GameGenre | null>
      longDesc?: string | null
      platform?: string | null
      languages?: string | null
      spec?: string | null
      publisherId: string
      image?: string | null
      subimage?: string | null
      createdAt: string
      updatedAt: string
      publisher?: {
        __typename: 'Publisher'
        id: string
        name: string
        createdAt: string
        updatedAt: string
      } | null
    } | null
    owner?: string | null
  } | null
}

export type GetUserQueryVariables = {
  id: string
}

export type GetUserQuery = {
  getUser?: {
    __typename: 'User'
    id: string
    username: string
    displayName: string
    games?: {
      __typename: 'ModelUserGameConnection'
      items?: Array<{
        __typename: 'UserGame'
        id: string
        userId: string
        gameId: string
        status?: GameListType | null
        createdOn?: string | null
        createdAt: string
        updatedAt: string
        owner?: string | null
      } | null> | null
      nextToken?: string | null
    } | null
    createdAt: string
    updatedAt: string
    owner?: string | null
  } | null
}

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null
  limit?: number | null
  nextToken?: string | null
}

export type ListUsersQuery = {
  listUsers?: {
    __typename: 'ModelUserConnection'
    items?: Array<{
      __typename: 'User'
      id: string
      username: string
      displayName: string
      games?: {
        __typename: 'ModelUserGameConnection'
        nextToken?: string | null
      } | null
      createdAt: string
      updatedAt: string
      owner?: string | null
    } | null> | null
    nextToken?: string | null
  } | null
}

export type GetUserGameQueryVariables = {
  id: string
}

export type GetUserGameQuery = {
  getUserGame?: {
    __typename: 'UserGame'
    id: string
    userId: string
    gameId: string
    user?: {
      __typename: 'User'
      id: string
      username: string
      displayName: string
      games?: {
        __typename: 'ModelUserGameConnection'
        nextToken?: string | null
      } | null
      createdAt: string
      updatedAt: string
      owner?: string | null
    } | null
    status?: GameListType | null
    createdOn?: string | null
    createdAt: string
    updatedAt: string
    game?: {
      __typename: 'Game'
      id: string
      title: string
      description?: string | null
      price: number
      discount?: number | null
      releaseDate: string
      tags: Array<GameGenre | null>
      longDesc?: string | null
      platform?: string | null
      languages?: string | null
      spec?: string | null
      publisherId: string
      image?: string | null
      subimage?: string | null
      createdAt: string
      updatedAt: string
      publisher?: {
        __typename: 'Publisher'
        id: string
        name: string
        createdAt: string
        updatedAt: string
      } | null
    } | null
    owner?: string | null
  } | null
}

export type ListUserGamesQueryVariables = {
  filter?: ModelUserGameFilterInput | null
  limit?: number | null
  nextToken?: string | null
}

export type ListUserGamesQuery = {
  listUserGames?: {
    __typename: 'ModelUserGameConnection'
    items?: Array<{
      __typename: 'UserGame'
      id: string
      userId: string
      gameId: string
      user?: {
        __typename: 'User'
        id: string
        username: string
        displayName: string
        createdAt: string
        updatedAt: string
        owner?: string | null
      } | null
      status?: GameListType | null
      createdOn?: string | null
      createdAt: string
      updatedAt: string
      game?: {
        __typename: 'Game'
        id: string
        title: string
        description?: string | null
        price: number
        discount?: number | null
        releaseDate: string
        tags: Array<GameGenre | null>
        longDesc?: string | null
        platform?: string | null
        languages?: string | null
        spec?: string | null
        publisherId: string
        image?: string | null
        subimage?: string | null
        createdAt: string
        updatedAt: string
      } | null
      owner?: string | null
    } | null> | null
    nextToken?: string | null
  } | null
}

export type FavoritesByUserAndStatusQueryVariables = {
  userId?: string | null
  statusCreatedOn?: ModelUserGameListByUserCompositeKeyConditionInput | null
  sortDirection?: ModelSortDirection | null
  filter?: ModelUserGameFilterInput | null
  limit?: number | null
  nextToken?: string | null
}

export type FavoritesByUserAndStatusQuery = {
  favoritesByUserAndStatus?: {
    __typename: 'ModelUserGameConnection'
    items?: Array<{
      __typename: 'UserGame'
      id: string
      userId: string
      gameId: string
      user?: {
        __typename: 'User'
        id: string
        username: string
        displayName: string
        createdAt: string
        updatedAt: string
        owner?: string | null
      } | null
      status?: GameListType | null
      createdOn?: string | null
      createdAt: string
      updatedAt: string
      game?: {
        __typename: 'Game'
        id: string
        title: string
        description?: string | null
        price: number
        discount?: number | null
        releaseDate: string
        tags: Array<GameGenre | null>
        longDesc?: string | null
        platform?: string | null
        languages?: string | null
        spec?: string | null
        publisherId: string
        image?: string | null
        subimage?: string | null
        createdAt: string
        updatedAt: string
      } | null
      owner?: string | null
    } | null> | null
    nextToken?: string | null
  } | null
}

export type FavoritesByUserAndGameQueryVariables = {
  userId?: string | null
  gameId?: ModelIDKeyConditionInput | null
  sortDirection?: ModelSortDirection | null
  filter?: ModelUserGameFilterInput | null
  limit?: number | null
  nextToken?: string | null
}

export type FavoritesByUserAndGameQuery = {
  favoritesByUserAndGame?: {
    __typename: 'ModelUserGameConnection'
    items?: Array<{
      __typename: 'UserGame'
      id: string
      userId: string
      gameId: string
      user?: {
        __typename: 'User'
        id: string
        username: string
        displayName: string
        createdAt: string
        updatedAt: string
        owner?: string | null
      } | null
      status?: GameListType | null
      createdOn?: string | null
      createdAt: string
      updatedAt: string
      game?: {
        __typename: 'Game'
        id: string
        title: string
        description?: string | null
        price: number
        discount?: number | null
        releaseDate: string
        tags: Array<GameGenre | null>
        longDesc?: string | null
        platform?: string | null
        languages?: string | null
        spec?: string | null
        publisherId: string
        image?: string | null
        subimage?: string | null
        createdAt: string
        updatedAt: string
      } | null
      owner?: string | null
    } | null> | null
    nextToken?: string | null
  } | null
}

export type GetPublisherQueryVariables = {
  id: string
}

export type GetPublisherQuery = {
  getPublisher?: {
    __typename: 'Publisher'
    id: string
    name: string
    createdAt: string
    updatedAt: string
    games?: {
      __typename: 'ModelGameConnection'
      items?: Array<{
        __typename: 'Game'
        id: string
        title: string
        description?: string | null
        price: number
        discount?: number | null
        releaseDate: string
        tags: Array<GameGenre | null>
        longDesc?: string | null
        platform?: string | null
        languages?: string | null
        spec?: string | null
        publisherId: string
        image?: string | null
        subimage?: string | null
        createdAt: string
        updatedAt: string
      } | null> | null
      nextToken?: string | null
    } | null
  } | null
}

export type ListPublishersQueryVariables = {
  filter?: ModelPublisherFilterInput | null
  limit?: number | null
  nextToken?: string | null
}

export type ListPublishersQuery = {
  listPublishers?: {
    __typename: 'ModelPublisherConnection'
    items?: Array<{
      __typename: 'Publisher'
      id: string
      name: string
      createdAt: string
      updatedAt: string
      games?: {
        __typename: 'ModelGameConnection'
        nextToken?: string | null
      } | null
    } | null> | null
    nextToken?: string | null
  } | null
}

export type GetGameQueryVariables = {
  id: string
}

export type GetGameQuery = {
  getGame?: {
    __typename: 'Game'
    id: string
    title: string
    description?: string | null
    price: number
    discount?: number | null
    releaseDate: string
    tags: Array<GameGenre | null>
    longDesc?: string | null
    platform?: string | null
    languages?: string | null
    spec?: string | null
    publisherId: string
    image?: string | null
    subimage?: string | null
    createdAt: string
    updatedAt: string
    publisher?: {
      __typename: 'Publisher'
      id: string
      name: string
      createdAt: string
      updatedAt: string
      games?: {
        __typename: 'ModelGameConnection'
        nextToken?: string | null
      } | null
    } | null
  } | null
}

export type ListGamesQueryVariables = {
  filter?: ModelGameFilterInput | null
  limit?: number | null
  nextToken?: string | null
}

export type ListGamesQuery = {
  listGames?: {
    __typename: 'ModelGameConnection'
    items?: Array<{
      __typename: 'Game'
      id: string
      title: string
      description?: string | null
      price: number
      discount?: number | null
      releaseDate: string
      tags: Array<GameGenre | null>
      longDesc?: string | null
      platform?: string | null
      languages?: string | null
      spec?: string | null
      publisherId: string
      image?: string | null
      subimage?: string | null
      createdAt: string
      updatedAt: string
      publisher?: {
        __typename: 'Publisher'
        id: string
        name: string
        createdAt: string
        updatedAt: string
      } | null
    } | null> | null
    nextToken?: string | null
  } | null
}

export type OnCreateUserSubscriptionVariables = {
  owner?: string | null
}

export type OnCreateUserSubscription = {
  onCreateUser?: {
    __typename: 'User'
    id: string
    username: string
    displayName: string
    games?: {
      __typename: 'ModelUserGameConnection'
      items?: Array<{
        __typename: 'UserGame'
        id: string
        userId: string
        gameId: string
        status?: GameListType | null
        createdOn?: string | null
        createdAt: string
        updatedAt: string
        owner?: string | null
      } | null> | null
      nextToken?: string | null
    } | null
    createdAt: string
    updatedAt: string
    owner?: string | null
  } | null
}

export type OnUpdateUserSubscriptionVariables = {
  owner?: string | null
}

export type OnUpdateUserSubscription = {
  onUpdateUser?: {
    __typename: 'User'
    id: string
    username: string
    displayName: string
    games?: {
      __typename: 'ModelUserGameConnection'
      items?: Array<{
        __typename: 'UserGame'
        id: string
        userId: string
        gameId: string
        status?: GameListType | null
        createdOn?: string | null
        createdAt: string
        updatedAt: string
        owner?: string | null
      } | null> | null
      nextToken?: string | null
    } | null
    createdAt: string
    updatedAt: string
    owner?: string | null
  } | null
}

export type OnDeleteUserSubscriptionVariables = {
  owner?: string | null
}

export type OnDeleteUserSubscription = {
  onDeleteUser?: {
    __typename: 'User'
    id: string
    username: string
    displayName: string
    games?: {
      __typename: 'ModelUserGameConnection'
      items?: Array<{
        __typename: 'UserGame'
        id: string
        userId: string
        gameId: string
        status?: GameListType | null
        createdOn?: string | null
        createdAt: string
        updatedAt: string
        owner?: string | null
      } | null> | null
      nextToken?: string | null
    } | null
    createdAt: string
    updatedAt: string
    owner?: string | null
  } | null
}

export type OnCreateUserGameSubscriptionVariables = {
  owner?: string | null
}

export type OnCreateUserGameSubscription = {
  onCreateUserGame?: {
    __typename: 'UserGame'
    id: string
    userId: string
    gameId: string
    user?: {
      __typename: 'User'
      id: string
      username: string
      displayName: string
      games?: {
        __typename: 'ModelUserGameConnection'
        nextToken?: string | null
      } | null
      createdAt: string
      updatedAt: string
      owner?: string | null
    } | null
    status?: GameListType | null
    createdOn?: string | null
    createdAt: string
    updatedAt: string
    game?: {
      __typename: 'Game'
      id: string
      title: string
      description?: string | null
      price: number
      discount?: number | null
      releaseDate: string
      tags: Array<GameGenre | null>
      longDesc?: string | null
      platform?: string | null
      languages?: string | null
      spec?: string | null
      publisherId: string
      image?: string | null
      subimage?: string | null
      createdAt: string
      updatedAt: string
      publisher?: {
        __typename: 'Publisher'
        id: string
        name: string
        createdAt: string
        updatedAt: string
      } | null
    } | null
    owner?: string | null
  } | null
}

export type OnUpdateUserGameSubscriptionVariables = {
  owner?: string | null
}

export type OnUpdateUserGameSubscription = {
  onUpdateUserGame?: {
    __typename: 'UserGame'
    id: string
    userId: string
    gameId: string
    user?: {
      __typename: 'User'
      id: string
      username: string
      displayName: string
      games?: {
        __typename: 'ModelUserGameConnection'
        nextToken?: string | null
      } | null
      createdAt: string
      updatedAt: string
      owner?: string | null
    } | null
    status?: GameListType | null
    createdOn?: string | null
    createdAt: string
    updatedAt: string
    game?: {
      __typename: 'Game'
      id: string
      title: string
      description?: string | null
      price: number
      discount?: number | null
      releaseDate: string
      tags: Array<GameGenre | null>
      longDesc?: string | null
      platform?: string | null
      languages?: string | null
      spec?: string | null
      publisherId: string
      image?: string | null
      subimage?: string | null
      createdAt: string
      updatedAt: string
      publisher?: {
        __typename: 'Publisher'
        id: string
        name: string
        createdAt: string
        updatedAt: string
      } | null
    } | null
    owner?: string | null
  } | null
}

export type OnDeleteUserGameSubscriptionVariables = {
  owner?: string | null
}

export type OnDeleteUserGameSubscription = {
  onDeleteUserGame?: {
    __typename: 'UserGame'
    id: string
    userId: string
    gameId: string
    user?: {
      __typename: 'User'
      id: string
      username: string
      displayName: string
      games?: {
        __typename: 'ModelUserGameConnection'
        nextToken?: string | null
      } | null
      createdAt: string
      updatedAt: string
      owner?: string | null
    } | null
    status?: GameListType | null
    createdOn?: string | null
    createdAt: string
    updatedAt: string
    game?: {
      __typename: 'Game'
      id: string
      title: string
      description?: string | null
      price: number
      discount?: number | null
      releaseDate: string
      tags: Array<GameGenre | null>
      longDesc?: string | null
      platform?: string | null
      languages?: string | null
      spec?: string | null
      publisherId: string
      image?: string | null
      subimage?: string | null
      createdAt: string
      updatedAt: string
      publisher?: {
        __typename: 'Publisher'
        id: string
        name: string
        createdAt: string
        updatedAt: string
      } | null
    } | null
    owner?: string | null
  } | null
}
