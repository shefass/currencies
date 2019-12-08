import React from "react";

import DayPickerInput from "react-day-picker/DayPickerInput";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Input = ({
  tp,
  dt,
  ccy,
  dtFrom,
  dtTo,
  getFxRates,
  getFxRatesForCurrency,
  onDatesChange,
  setDtFrom,
  setDtTo
}) => {
  if(dtFrom === '') {
  return (
    <Card>Date of data: 
      <DayPickerInput value={dt} selectedDay={dt} onDayChange={(e)=>onDatesChange(e)} />
      <Card.Body>Input</Card.Body>
      
      <Button variant="primary" onClick={() => getFxRates()}>
        getFxRates
      </Button>
      <Button variant="primary" onClick={() => getFxRatesForCurrency()}>
        getFxRatesForCurrency
      </Button>
    </Card>
  );} else {
    return (
      <Card>
        interval trigered
        from: <DayPickerInput value={dtFrom} selectedDay={dtFrom} onDayChange={(e)=>setDtFrom(e)} />
        to: <DayPickerInput value={dtTo} selectedDay={dtTo} onDayChange={(e)=>setDtTo(e)} />
        showing: {ccy}
        
      </Card>
    );
  }
};

export default Input;
