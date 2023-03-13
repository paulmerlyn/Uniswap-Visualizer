import React, { useState } from "react"
import { DisplayPoolsByTvl } from "../components/DisplayPoolsByTvl"
import { DisplayPoolsBy24HourVol } from "../components/DisplayPoolsBy24HourVol"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import ButtonGroup from "react-bootstrap/ButtonGroup"
import ToggleButton from "react-bootstrap/ToggleButton"
import Button from "react-bootstrap/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRotateRight } from "@fortawesome/free-solid-svg-icons"
import { useQuery } from "@apollo/client"
import { getQueries } from "../gqQueries/getQueries"
import configData from "../appConfig.json"

const TopPools = () => {
  const [title, setTitle] = useState(
    `Top ${configData.uniswap.pools.pageSize} Pools by Total Value Locked (TVL)`,
  )
  const [radioValue, setRadioValue] = useState("tvl")

  const radios = [
    { name: "By TVL (USD)", value: "tvl" },
    { name: "By 24-Hour Volume", value: "24v" },
  ]

  const { loading, error, data, refetch } = useQuery(
    getQueries(configData.uniswap.pools.pageSize).GET_POOLS_BY_TVL_AND_VOL,
    {
      fetchPolicy: "cache-and-network",
      nextFetchPolicy: "network-only",
    },
  )
  if (error) throw new Error(error.message)

  const handleToggle = (e) => {
    const togValue = e.currentTarget.value
    setRadioValue(togValue)
    setTitle(
      togValue === "tvl"
        ? `Top ${configData.uniswap.pools.pageSize} Pools by Total Value Locked (TVL)`
        : `Top ${configData.uniswap.pools.pageSize} Pools by 24-Hour Volume`,
    )
  }

  const handleRefresh = async () => {
    refetch({ fetchPolicy: "network-only" })
  }

  return (
    <Container>
      <Row>
        <Col md={3}>
          <div className="d-flex align-items-center" style={{ minHeight: "10vh" }}>
            <ButtonGroup>
              {radios.map((radio, index) => (
                <ToggleButton
                  key={index}
                  id={`radio-${index}`}
                  type="radio"
                  variant="outline-dark"
                  name="radio"
                  value={radio.value}
                  checked={radioValue === radio.value}
                  onChange={handleToggle}
                >
                  {radio.name}
                </ToggleButton>
              ))}
            </ButtonGroup>
          </div>
        </Col>
        <Col md={{ span: 2 }}>
          <div className="d-flex align-items-center text-right" style={{ minHeight: "9vh" }}>
            <Button variant="outline-warning" className="text-right" onClick={handleRefresh}>
              <FontAwesomeIcon icon={faArrowRotateRight} />
              <span>&nbsp;&nbsp;Refresh</span>
            </Button>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="d-flex align-items-center text-center" style={{ minHeight: "6vh" }}>
            <h4>{title}</h4>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col lg="12">
          {radioValue === "tvl" ? (
            <DisplayPoolsByTvl data={data} loading={loading} />
          ) : (
            <DisplayPoolsBy24HourVol data={data} loading={loading} />
          )}
        </Col>
      </Row>
    </Container>
  )
}

export default TopPools
