import Spinner from "react-bootstrap/Spinner"
import Stack from "react-bootstrap/Stack"

const Loader = () => {
  return (
    <Stack className="d-flex align-items-center text-center mx-auto">
      <div style={{ height: 100 }}></div>
      <Spinner className="d-flex align-items-center text-center" animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </Stack>
  )
}

export default Loader
