export const getUserportofolio = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      networth
      portofolliocoins {
        items {
          id

          amount
          coin {
            id
            name
            symbol
            cuurentprice,
            image
          }
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
