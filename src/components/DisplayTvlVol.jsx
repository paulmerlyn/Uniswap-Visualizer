import React from "react"
import PropTypes from "prop-types"
import Loader from "./Loader"
import { Chart } from "react-google-charts"

export const DisplayTvlVol = ({ data, loading }) => {
  if (loading) return <Loader />

  const options = {
    title: "Correlation between Tokens' Total Value Locked (TVL) and Volume in USD",
    hAxis: { title: "Volume (USD)" },
    vAxis: { title: "Total Value Locked (USD)" },
    legend: "none",
  }

  let processedDataForGoogleChart = data.tokens.map((tokenData) => {
    return [Number(tokenData.totalValueLockedUSD), Number(tokenData.volumeUSD)]
  })
  processedDataForGoogleChart.unshift(["Volume (USD)", "Total Value Locked (USD)"])

  return (
    <>
      <Chart
        chartType="ScatterChart"
        options={options}
        // data={[["Volume (USD)", "Total Value Locked (USD)"], [4, 5.5], [8, 12]]}
        data={processedDataForGoogleChart}
        width="100%"
        height="400px"
        legendToggle
      />
    </>
  )
}

DisplayTvlVol.propTypes = {
  data: PropTypes.object,
  loading: PropTypes.bool,
}
