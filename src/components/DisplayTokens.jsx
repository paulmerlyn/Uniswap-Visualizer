import React from "react"
import Table from "react-bootstrap/Table"
import PropTypes from "prop-types"
import Loader from "./Loader"
import Paginator from "./Paginator"
import configData from "../appConfig.json"

export const DisplayTokens = ({ data, loading, paginationHandlers }) => {
  if (loading) return <Loader />

  const pageSize = configData.uniswap.tokens.pageSize

  const getRankFromPageNumber = () => {
    // Prevent -ve numbers by clamping minimum page rank to 0
    return Math.max(Number(sessionStorage.getItem("tokensPageNum")) - 1, 0) * pageSize
  }

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th className="text-right">Rank</th>
            <th>Symbol (Token 0)</th>
            <th>Name (Token 0)</th>
            <th className="text-right">Total Value Locked (USD)</th>
            <th className="text-right">Transaction Count</th>
          </tr>
        </thead>
        <tbody>
          {data.tokens.map(({ id, symbol, name, totalValueLockedUSD, txCount }, index) => (
            <tr key={id}>
              <td data-testid="rank" className="text-right">{getRankFromPageNumber() + index + 1}</td>
              <td>{symbol}</td>
              <td>{name}</td>
              <td className="text-right">
                {Number(Number(totalValueLockedUSD).toFixed(0)).toLocaleString("en-us")}
              </td>
              <td className="text-right">
                {Number(Number(txCount).toFixed(0)).toLocaleString("en-us")}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Paginator paginationHandlers={paginationHandlers} />
    </>
  )
}

DisplayTokens.propTypes = {
  data: PropTypes.object,
  loading: PropTypes.bool,
  paginationHandlers: PropTypes.func,
}
