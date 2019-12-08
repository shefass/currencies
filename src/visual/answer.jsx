import React from "react";

import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";

const Answer = ({ fxRates, setCcy, fxRatesRange }) => {
  if ((typeof fxRates === "object") & (typeof fxRatesRange !== "object")) {
    return (
      <CardDeck>
        {fxRates.map(o => (
          <Card
            style={{ minWidth: "10rem" }}
            className="text-center mb-2"
            key={o.CcyAmt[2]}
            onClick={e => setCcy(e.target.firstChild.data)}
          >
            <Card.Body>
              {o.CcyAmt[2]}
              {" "}
              {o.CcyAmt[3]}
            </Card.Body>
          </Card>
        ))}
      </CardDeck>
    );
  } else if (typeof fxRatesRange === "object") {
    return (
      <CardDeck>
        {fxRatesRange.map(o => (
          <Card
            style={{ minWidth: "12rem" }}
            className="text-center mb-2"
            key={o.Dt}
          >
            <Card.Body>
              {o.Dt}{" "}{o.CcyAmt[3]}
            </Card.Body>
          </Card>
        ))}
      </CardDeck>
    );
  } else {
    return null;
  }
};

export default Answer;
