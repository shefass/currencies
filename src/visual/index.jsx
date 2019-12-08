import React from "react";

import Welcome from "./welcome";
import Answer from "./answer";
import Input from "./input";

import Container from "react-bootstrap/Container";

const Index = ({
  tp,
  dt,
  ccy,
  dtFrom,
  dtTo,
  fxRates,
  fxRatesRange,
  getFxRates,
  getFxRatesForCurrency,
  onDatesChange,
  setCcy,
  setDtTo,
  setDtFrom
}) => {
  return (
    <Container fluid>
      <Welcome />
      <Input
        tp={tp}
        dt={dt}
        ccy={ccy}
        dtFrom={dtFrom}
        dtTo={dtTo}
        getFxRates={getFxRates}
        getFxRatesForCurrency={getFxRatesForCurrency}
        onDatesChange={onDatesChange}
        setDtTo={setDtTo}
        setDtFrom={setDtFrom}
      />
      <Answer
        fxRates={fxRates}
        fxRatesRange={fxRatesRange}
        dt={dt}
        ccy={ccy}
        dtFrom={dtFrom}
        dtTo={dtTo}
        setCcy={setCcy}
      />
    </Container>
  );
};

export default Index;
