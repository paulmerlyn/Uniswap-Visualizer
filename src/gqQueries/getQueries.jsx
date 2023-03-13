import { gql } from "@apollo/client"

export const getQueries = (count = undefined, skip = undefined) => {
  return {
    GET_POOLS_BY_TVL_AND_VOL: gql`
      query GetPoolsByTvlAndVol {
        poolsByVolume: pools(first: ${count}, orderBy: volumeUSD, orderDirection: desc) {
          id
          totalValueLockedUSD
          token0 {
            symbol
            name
          }
          token1 {
            symbol
            name
          }
          token0Price
          token1Price
        }
        poolsByTvl: pools(first: ${count}, orderBy: totalValueLockedUSD, orderDirection: desc) {
          id
          totalValueLockedUSD
          token0 {
            symbol
            name
          }
          token1 {
            symbol
            name
          }
          token0Price
          token1Price
        }
      }
    `,
    GET_TOKENS: gql`
      query GetTokens {
        tokens(first: ${count}, skip: ${skip}, orderBy: totalValueLockedUSD, orderDirection: desc) {
          id
          symbol
          name
          totalValueLockedUSD
          txCount
        }
      }
    `,
    GET_TOKENS_TVL_BY_VOL: gql`
      query GetTokensTvlByVol {
        tokens(first: ${count}, orderBy: volumeUSD, orderDirection:desc) {
          symbol
          name
          volumeUSD
          totalValueLockedUSD
        }
      }
    `,
  }
}
