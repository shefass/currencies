import React from "react";

import Card from "react-bootstrap/Card";

const Answer = ({ fxRates, setCcy, fxRatesRange }) => {
  if ((typeof fxRates === "object") & (typeof fxRatesRange !== "object")) {
    return fxRates.map(o => (
      <Card key={o.CcyAmt[2]} onClick={e => setCcy(e.target.firstChild.data)}>
        <Card.Body>
          {o.CcyAmt[2]}-{o.CcyAmt[3]}
        </Card.Body>
      </Card>
    ));
  } else if (typeof fxRatesRange === "object") {
    return fxRatesRange.map(o => (
      <Card key={o.Dt}>
        <Card.Body>
          {o.Dt}-{o.CcyAmt[3]} {o.CcyAmt[2]}
        </Card.Body>
      </Card>
    ));
  } else {
    return null;
  }
};

export default Answer;
