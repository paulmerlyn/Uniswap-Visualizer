import React, { useState } from "react"
import { DisplayTokens } from "../components/DisplayTokens"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { useQuery } from "@apollo/client"
import { getQueries } from "../gqQueries/getQueries"
import configData from "../appConfig.json"

const Tokens = () => {
  const [skipState, setSkipState] = useState(0)

  const { loading, error, data } = useQuery(
    getQueries(configData.uniswap.tokens.pageSize, skipState).GET_TOKENS,
    {
      fetchPolicy: "cache-and-network",
      nextFetchPolicy: "cache-first",
    },
  )
  if (error) throw new Error(error.message)

  const pageSize = configData.uniswap.tokens.pageSize

  const paginationHandlers = () => {
    return {
      onClickNext: () => {
        setSkipState((skipState) => skipState + pageSize)
      },
      onClickPrev: () => {
        setSkipState((skipState) => skipState - pageSize)
      },
      onClickFirst: () => {
        setSkipState(0)
      },
      onClickLast: () => {
        // Hard-coded the end page number to 1000 (though users can still navigate beyond it) because I couldn't find a way of getting the total count of tokens via the Uniswap API
        setSkipState(1000 - pageSize)
      },
    }
  }
  return (
    <Container>
      <Row>
        <Col>
          <div className="d-flex align-items-center text-center" style={{ minHeight: "6vh" }}>
            <h4>Tokens by Total Locked Value (TVL)</h4>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col lg="12">
          <DisplayTokens data={data} loading={loading} paginationHandlers={paginationHandlers} />
        </Col>
      </Row>
    </Container>
  )
}

export default Tokens
