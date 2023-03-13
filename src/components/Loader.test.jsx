import renderer from "react-test-renderer"
import Loader from "./Loader"

it("renders correctly", () => {
  const component = renderer.create(<Loader />)
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
