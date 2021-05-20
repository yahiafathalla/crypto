export const chagecoins = /* GraphQL */ `
  mutation Chagecoins($Coinid: ID!, $isbuy: Boolean!, $amount: Float!,$egyportofoliocoinid:ID,$coinsofportofolioncoinid:ID) {
    chagecoins(Coinid: $Coinid, isbuy: $isbuy, amount: $amount,egyportofoliocoinid:$egyportofoliocoinid,coinsofportofolioncoinid:$coinsofportofolioncoinid)
  }
`;
