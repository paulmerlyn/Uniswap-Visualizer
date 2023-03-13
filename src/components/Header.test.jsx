import { render, screen } from "@testing-library/react"
import { Header } from "./Header"

test("renders Uniswap Vizualizer", () => {
  render(<Header />)
  const uniswapElement = screen.getByText(/uniswap visualizer/i)
  expect(uniswapElement).toBeInTheDocument()
})
