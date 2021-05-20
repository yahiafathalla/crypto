/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type User = {
  __typename: "User",
  id?: string,
  name?: string | null,
  email?: string,
  image?: string | null,
  networth?: number,
  portofolliocoins?: ModelPortofoliocoinConnection,
  createdAt?: string,
  updatedAt?: string,
};

export type ModelPortofoliocoinConnection = {
  __typename: "ModelPortofoliocoinConnection",
  items?:  Array<Portofoliocoin | null > | null,
  nextToken?: string | null,
};

export type Portofoliocoin = {
  __typename: "Portofoliocoin",
  id?: string,
  Userid?: string,
  user?: User,
  amount?: number,
  Coinid?: string,
  coin?: Coins,
  createdAt?: string,
  updatedAt?: string,
};

export type Coins = {
  __typename: "Coins",
  id?: string,
  Cgid?: string,
  name?: string,
  symbol?: string,
  image?: string | null,
  cuurentprice?: number,
  valuechange1d?: number,
  valuechange7d?: number,
  valuechange1h?: number,
  pricehistorystring?: string | null,
  createdAt?: string,
  updatedAt?: string,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  image?: ModelStringInput | null,
  networth?: ModelFloatInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items?:  Array<User | null > | null,
  nextToken?: string | null,
};

export type ModelPortofoliocoinFilterInput = {
  id?: ModelIDInput | null,
  Userid?: ModelIDInput | null,
  amount?: ModelFloatInput | null,
  Coinid?: ModelIDInput | null,
  and?: Array< ModelPortofoliocoinFilterInput | null > | null,
  or?: Array< ModelPortofoliocoinFilterInput | null > | null,
  not?: ModelPortofoliocoinFilterInput | null,
};

export type ModelCoinsFilterInput = {
  id?: ModelIDInput | null,
  Cgid?: ModelIDInput | null,
  name?: ModelStringInput | null,
  symbol?: ModelStringInput | null,
  image?: ModelStringInput | null,
  cuurentprice?: ModelFloatInput | null,
  valuechange1d?: ModelFloatInput | null,
  valuechange7d?: ModelFloatInput | null,
  valuechange1h?: ModelFloatInput | null,
  pricehistorystring?: ModelStringInput | null,
  and?: Array< ModelCoinsFilterInput | null > | null,
  or?: Array< ModelCoinsFilterInput | null > | null,
  not?: ModelCoinsFilterInput | null,
};

export type ModelCoinsConnection = {
  __typename: "ModelCoinsConnection",
  items?:  Array<Coins | null > | null,
  nextToken?: string | null,
};

export type ChagecoinsMutationVariables = {
  Coinid?: string,
  isbuy?: boolean,
  amount?: number,
};

export type ChagecoinsMutation = {
  chagecoins?: boolean | null,
};

export type GetUserQueryVariables = {
  id?: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    email: string,
    image?: string | null,
    networth: number,
    portofolliocoins?:  {
      __typename: "ModelPortofoliocoinConnection",
      items?:  Array< {
        __typename: "Portofoliocoin",
        id: string,
        Userid: string,
        amount: number,
        Coinid: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items?:  Array< {
      __typename: "User",
      id: string,
      name?: string | null,
      email: string,
      image?: string | null,
      networth: number,
      portofolliocoins?:  {
        __typename: "ModelPortofoliocoinConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetPortofoliocoinQueryVariables = {
  id?: string,
};

export type GetPortofoliocoinQuery = {
  getPortofoliocoin?:  {
    __typename: "Portofoliocoin",
    id: string,
    Userid: string,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      email: string,
      image?: string | null,
      networth: number,
      portofolliocoins?:  {
        __typename: "ModelPortofoliocoinConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    amount: number,
    Coinid: string,
    coin?:  {
      __typename: "Coins",
      id: string,
      Cgid: string,
      name: string,
      symbol: string,
      image?: string | null,
      cuurentprice: number,
      valuechange1d: number,
      valuechange7d: number,
      valuechange1h: number,
      pricehistorystring?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPortofoliocoinsQueryVariables = {
  filter?: ModelPortofoliocoinFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPortofoliocoinsQuery = {
  listPortofoliocoins?:  {
    __typename: "ModelPortofoliocoinConnection",
    items?:  Array< {
      __typename: "Portofoliocoin",
      id: string,
      Userid: string,
      user?:  {
        __typename: "User",
        id: string,
        name?: string | null,
        email: string,
        image?: string | null,
        networth: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      amount: number,
      Coinid: string,
      coin?:  {
        __typename: "Coins",
        id: string,
        Cgid: string,
        name: string,
        symbol: string,
        image?: string | null,
        cuurentprice: number,
        valuechange1d: number,
        valuechange7d: number,
        valuechange1h: number,
        pricehistorystring?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetCoinsQueryVariables = {
  id?: string,
};

export type GetCoinsQuery = {
  getCoins?:  {
    __typename: "Coins",
    id: string,
    Cgid: string,
    name: string,
    symbol: string,
    image?: string | null,
    cuurentprice: number,
    valuechange1d: number,
    valuechange7d: number,
    valuechange1h: number,
    pricehistorystring?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCoinssQueryVariables = {
  filter?: ModelCoinsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCoinssQuery = {
  listCoinss?:  {
    __typename: "ModelCoinsConnection",
    items?:  Array< {
      __typename: "Coins",
      id: string,
      Cgid: string,
      name: string,
      symbol: string,
      image?: string | null,
      cuurentprice: number,
      valuechange1d: number,
      valuechange7d: number,
      valuechange1h: number,
      pricehistorystring?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};
