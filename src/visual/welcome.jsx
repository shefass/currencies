import React from "react";

import Card from "react-bootstrap/Card";

const Welcome = () => {
  return (
    <Card bg="dark" text="white" className="mb-2 text-center">
      <Card.Body>
        <Card.Title>Welcome!</Card.Title>
        <Card.Text>In this page, you can see all currency rates by date or specific currency rates in the time interval.</Card.Text>
        <Card.Link href="https://github.com/shefass/currencies" target="_blank">This page source</Card.Link>
        <Card.Link href="http://www.lb.lt/webservices/fxrates/" target="_blank">API used</Card.Link>
        <Card.Link href="http://feedback.vaickelionis.com/" target="_blank">Feedback</Card.Link>
       
      </Card.Body>
    </Card>
  );
};

export default Welcome;
