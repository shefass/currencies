import React from "react";

import Card from "react-bootstrap/Card";

import { VictoryBar, VictoryChart, VictoryAxis } from "victory";

//TODO
//--y axis must start not from 0, but from min price to top price
//--mouse over must show data point
const Graph = ({ fxRatesRange }) => {
  return (
    <Card className="mb-2">
      <VictoryChart
        // domainPadding will add space to each side of VictoryBar to
        // prevent it from overlapping the axis
        domainPadding={45}
      >
        <VictoryAxis
          fixLabelOverlap
          style={{ tickLabels: { fontSize: 6, padding: 20, angle: 90 } }}
        />
        <VictoryAxis
          dependentAxis
          fixLabelOverlap
          style={{ tickLabels: { fontSize: 10, padding: 2 } }}
        />
        <VictoryBar
          style={{ data: { fill: "tomato" } }}
          data={fxRatesRange}
          alignment="end"
          x="Dt"
          y="CcyAmt[3]"
        />
      </VictoryChart>
    </Card>
  );
};

export default Graph;
