import React, { useEffect } from "react"
import Pagination from "react-bootstrap/Pagination"
import PropTypes from "prop-types"

const Paginator = ({ paginationHandlers }) => {
  const getPageNum = () => {
    return Number(sessionStorage.getItem("tokensPageNum")) || 1
  }

  const pageForward = () => {
    sessionStorage.setItem("tokensPageNum", getPageNum() + 1)
  }

  const pageBackward = () => {
    if (getPageNum() === 1) return
    sessionStorage.setItem("tokensPageNum", getPageNum() - 1)
  }

  const pageFirst = () => {
    if (getPageNum() === 1) return
    sessionStorage.setItem("tokensPageNum", 1)
  }

  const pageLast = () => {
    // Hard-coded the end to 1000 (though users can still navigate beyond it) because I couldn't find a way of getting the total count of tokens via the Uniswap API
    sessionStorage.setItem("tokensPageNum", 1000)
  }

  const onClickNext = (event) => {
    event.preventDefault()
    pageForward()
    paginationHandlers().onClickNext()
  }

  const onClickPrev = (event) => {
    event.preventDefault()
    pageBackward()
    paginationHandlers().onClickPrev()
  }

  const onClickFirst = (event) => {
    event.preventDefault()
    pageFirst()
    paginationHandlers().onClickFirst()
  }

  const onClickLast = (event) => {
    event.preventDefault()
    pageLast()
    paginationHandlers().onClickLast()
  }

  useEffect(() => {
    if (!getPageNum) {
      sessionStorage.setItem("tokensPageNum", 1)
    }
  }, [])

  return (
    <Pagination>
      <Pagination.First
        id="first"
        active={false}
        disabled={getPageNum() < 2}
        onClick={onClickFirst}
      />
      <Pagination.Prev id="prev" active={false} disabled={getPageNum() < 2} onClick={onClickPrev} />
      <Pagination.Next id="next" active={false} disabled={false} onClick={onClickNext} />
      <Pagination.Last id="last" active={false} disabled={false} onClick={onClickLast} />
    </Pagination>
  )
}

Paginator.propTypes = {
  paginationHandlers: PropTypes.func,
  pageSize: PropTypes.number,
}

export default Paginator
