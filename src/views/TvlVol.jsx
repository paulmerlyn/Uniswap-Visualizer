import React from "react"
import { DisplayTvlVol } from "../components/DisplayTvlVol"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { useQuery } from "@apollo/client"
import { getQueries } from "../gqQueries/getQueries"
import configData from "../appConfig.json"

const TvlVol = () => {
  const { loading, error, data } = useQuery(
    getQueries(configData.uniswap.tokens_tvl_by_vol.count).GET_TOKENS_TVL_BY_VOL,
    {
      fetchPolicy: "cache-and-network",
      nextFetchPolicy: "cache-first",
    },
  )
  if (error) throw new Error(error.message)

  return (
    <Container>
      <Row></Row>
      <Row className="justify-content-md-center">
        <Col lg="12">
          <DisplayTvlVol data={data} loading={loading} />
        </Col>
      </Row>
    </Container>
  )
}

export default TvlVol
