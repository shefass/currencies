import React from "react";

import DayPickerInput from "react-day-picker/DayPickerInput";
import Card from "react-bootstrap/Card";

const Input = ({
  tp,
  dt,
  ccy,
  dtFrom,
  dtTo,
  onDatesChange,
  setDtFrom,
  setDtTo
}) => {
  if (dtFrom === "") {
    return (
      <Card bg="light" className="mb-2 text-center">
        <Card.Body>
          <Card.Title>Please select date or currency</Card.Title>
          <DayPickerInput
            value={"Showing " + dt + " rates"}
            selectedDay={dt}
            onDayChange={e => onDatesChange(e)}
          />
        </Card.Body>
      </Card>
    );
  } else {
    return (
      <Card bg="light"  className="mb-2 text-center">
        
        <Card.Body>
        <Card.Title>Showing {ccy} currency rates</Card.Title>
          <DayPickerInput
            value={"Rates from " + dtFrom}
            selectedDay={dtFrom}
            onDayChange={e => setDtFrom(e)}
          />

          <DayPickerInput
            value={"To " + dtTo}
            selectedDay={dtTo}
            onDayChange={e => setDtTo(e)}
          />
        </Card.Body>
      </Card>
    );
  }
};

export default Input;
