import React, { useState, useEffect } from "react"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import configData from "../appConfig.json"

export const Header = () => {
  const [path, setPath] = useState("")

  useEffect(() => {
    const url = new URL(location.href)
    const path = url.pathname.slice(1)
    setPath(path)
  }, [path])

  return (
    <Container>
      <Row className="d-flex justify-content-center">
        <Col md="12" className="mt-3 text-white">
          <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="#home">
              &nbsp;&nbsp;
              <img
                src="/uniswap-logo-pink.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
              &nbsp; Uniswap Visualizer
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="pools" id="pools" active={path === "pools"}>
                  &nbsp;&nbsp;Top {configData.uniswap.pools.pageSize} Pools
                </Nav.Link>
                <Nav.Link href="tokens" id="tokens" active={path === "tokens"}>&nbsp;&nbsp;Tokens</Nav.Link>
                <Nav.Link href="tvlvol" id="tvlvol" active={path === "tvlvol"}>&nbsp;&nbsp;Token TVL-vs-Vol</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Col>
      </Row>
    </Container>
  )
}
