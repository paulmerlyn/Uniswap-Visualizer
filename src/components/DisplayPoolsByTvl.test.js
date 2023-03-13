import React from "react";
import { DisplayPoolsByTvl } from "./DisplayPoolsByTvl";
import {render} from "@testing-library/react";

let testData

beforeEach(() => {
  testData = {
    poolsByTvl: [{
      id: 123,
      totalValueLockedUSD: 999,
      token0: {
        symbol: "XYZ",
        name: "End of Alphabet"
      },
      token1: {
        symbol: "XYZ",
        name: "End of Alphabet"
      }
    }]
  }

})

describe("tests DisplayPoolsByTvl component", ()=>{
    test("has numeric TVL", ()=>{
        const {getByTestId} = render(<DisplayPoolsByTvl data={testData} loading={false}/>)
        expect(getByTestId("tvl")).toHaveTextContent(/\d+/)
    })
})