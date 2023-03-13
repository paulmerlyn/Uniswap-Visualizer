import { render, screen } from "@testing-library/react"
import TopPools from "./TopPools"
import "@testing-library/jest-dom"
import { MockedProvider } from "@apollo/client/testing"
import { getQueries } from "../gqQueries/getQueries"

const mockQuery = getQueries(1).GET_POOLS_BY_TVL_AND_VOL

describe("TopPools displays by both TVL and 24-hour volume", () => {
  const mocks = [
    {
      request: {
        query: mockQuery,
      },
      result: {
        data: {
          poolsByVolume: [
            {
              id: "0x88e6a0c2ddd26feeb64f039a2c41296fcb3f5640",
              totalValueLockedUSD: "101",
              token0: {
                symbol: "USDC",
                name: "USD Coin",
              },
              token1: {
                symbol: "WETH",
                name: "Wrapped Ether",
              },
              token0Price: "1674.543593126557136251807319542899",
              token1Price: "0.0005971776453623939232792120215626628",
            },
          ],
          poolsByTvl: [
            {
              id: "0x277667eb3e34f134adf870be9550e9f323d0dc24",
              totalValueLockedUSD: "1110167010695.785900004139211677005",
              token0: {
                symbol: "ease.org",
                name: "Ease Fun Token",
              },
              token1: {
                symbol: "ez-cvxsteCRV",
                name: "cvxsteCRV Ease Vault",
              },
              token0Price: "10201983.52821130596040573863212092",
              token1Price: "0.00000009802015433907763482013950488687576",
            },
          ],
        },
      },
    },
  ]

  it("renders both radio buttons for selecting view of pools", async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <TopPools />
      </MockedProvider>,
    )
    expect(await screen.findByText("By TVL (USD)")).toBeInTheDocument()
    expect(await screen.findByText("By 24-Hour Volume")).toBeInTheDocument()
  })
})
