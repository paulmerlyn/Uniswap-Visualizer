import React from "react";
import { DisplayTokens } from "./DisplayTokens";
import {render} from "@testing-library/react";
// import userEvent from "@testing-library/user-event";

let testData

beforeEach(() => {
  testData = {
    tokens: [{
      id: 123,
      symbol: "CYMBA.L",
      name: "Cymbal",
      totalValueLockedUSD: "100000",
      txCount: "777777",
    }]
  }
})

describe("tests DisplayPoolsByTvl component", ()=>{
    test("has numeric TVL", ()=>{
        const {getByTestId} = render(<DisplayTokens data={testData} loading={false}/>)
        expect(getByTestId("rank")).toHaveTextContent(/\d+/)
    })
})