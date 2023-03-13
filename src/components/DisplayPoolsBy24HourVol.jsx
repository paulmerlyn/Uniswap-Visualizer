import React from "react"
import Table from "react-bootstrap/Table"
import PropTypes from "prop-types"
import Loader from "./Loader"

export const DisplayPoolsBy24HourVol = ({ data, loading }) => {
  if (loading) return <Loader />

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th className="text-right">Rank</th>
          <th className="text-right">Total Value Locked (USD)</th>
          <th>Symbol (Token 0)</th>
          <th>Name (Token 0)</th>
          <th>Symbol (Token 1)</th>
          <th>Name (Token 1)</th>
        </tr>
      </thead>
      <tbody>
        {data.poolsByVolume.map(({ id, totalValueLockedUSD, token0, token1 }, index) => (
          <tr key={id}>
            <td className="text-right">{index + 1}</td>
            <td className="text-right">
              {Number(Number(totalValueLockedUSD).toFixed(0)).toLocaleString("en-us")}
            </td>
            <td>{token0.symbol}</td>
            <td>{token0.name}</td>
            <td>{token1.symbol}</td>
            <td>{token1.name}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

DisplayPoolsBy24HourVol.propTypes = {
  poolsByVolume: PropTypes.object,
  data: PropTypes.object,
  loading: PropTypes.bool,
}
