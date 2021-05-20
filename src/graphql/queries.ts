/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      email
      image
      networth
      portofolliocoins {
        items {
          id
          Userid
          amount
          Coinid
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
        image
        networth
        portofolliocoins {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPortofoliocoin = /* GraphQL */ `
  query GetPortofoliocoin($id: ID!) {
    getPortofoliocoin(id: $id) {
      id
      Userid
      user {
        id
        name
        email
        image
        networth
        portofolliocoins {
          nextToken
        }
        createdAt
        updatedAt
      }
      amount
      Coinid
      coin {
        id
        Cgid
        name
        symbol
        image
        cuurentprice
        valuechange1d
        valuechange7d
        valuechange1h
        pricehistorystring
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listPortofoliocoins = /* GraphQL */ `
  query ListPortofoliocoins(
    $filter: ModelPortofoliocoinFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPortofoliocoins(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Userid
        user {
          id
          name
          email
          image
          networth
          createdAt
          updatedAt
        }
        amount
        Coinid
        coin {
          id
          Cgid
          name
          symbol
          image
          cuurentprice
          valuechange1d
          valuechange7d
          valuechange1h
          pricehistorystring
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCoins = /* GraphQL */ `
  query GetCoins($id: ID!) {
    getCoins(id: $id) {
      id
      Cgid
      name
      symbol
      image
      cuurentprice
      valuechange1d
      valuechange7d
      valuechange1h
      pricehistorystring
      createdAt
      updatedAt
    }
  }
`;
export const listCoinss = /* GraphQL */ `
  query ListCoinss(
    $filter: ModelCoinsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCoinss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Cgid
        name
        symbol
        image
        cuurentprice
        valuechange1d
        valuechange7d
        valuechange1h
        pricehistorystring
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
