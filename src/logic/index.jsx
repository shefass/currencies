import React, { Component } from "react";

import convert from "xml-js";

import axios from "axios";

import Visual from "../visual/index";

class Index extends Component {
  state = {
    tp: "eu", //not implamented
    dt: "",
    ccy: "",
    dtFrom: "",
    dtTo: "",
    fxRates: "",
    fxRatesRange: ""
  };

  componentDidMount = () => this.getCurrentFxRates();

  getCurrentFxRates = () => {
    axios
      .get(
        "/webservices/fxrates/FxRates.asmx/getCurrentFxRates?tp=" +
          this.state.tp
      )
      .then(response => {
        this.convertXMLtoJS(response, true);
      })
      .catch(error => {
        console.log(error);
      });
  };

  getFxRates = () => {
    axios
      .get(
        "/webservices/fxrates/FxRates.asmx/getFxRates?tp=" +
          this.state.tp +
          "&dt=" +
          this.state.dt
      )
      .then(response => {
        this.convertXMLtoJS(response, true);
      })
      .catch(error => {
        console.log(error);
      });
  };

  getFxRatesForCurrency = () => {
    axios
      .get(
        "/webservices/fxrates/FxRates.asmx/getFxRatesForCurrency?tp=" +
          this.state.tp +
          "&ccy=" +
          this.state.ccy +
          "&dtFrom=" +
          this.state.dtFrom +
          "&dtTo=" +
          this.state.dtTo
      )
      .then(response => {
        this.convertXMLtoJS(response, false);
      })
      .catch(error => {
        console.log(error);
      });
  };

  setCcy = e => {
    const MONTH_IN_MILISECONDS = 2592000000;
    let dt = this.state.dt;
    let dateObject = new Date(dt);
    let minusMonth = new Date(dateObject.getTime() - MONTH_IN_MILISECONDS);
    let dtFrom = minusMonth.toJSON().slice(0, 10);
    this.setState({ ccy: e, dtTo: dt, dtFrom: dtFrom });
    setTimeout(() => this.getFxRatesForCurrency(), 100);
  };

  setDtTo = e => {
    this.setState({ dtTo: e.toJSON().slice(0, 10) });
    setTimeout(() => this.getFxRatesForCurrency(), 100);
  };

  setDtFrom = e => {
    this.setState({ dtFrom: e.toJSON().slice(0, 10) });
    setTimeout(() => this.getFxRatesForCurrency(), 100);
  };

  convertXMLtoJS = (response, fxRates) => {
    let object = convert.xml2js(response.data, { compact: true, trim: true });
    let answer = object.FxRates.FxRate.map(e => {
      let pair = {};
      pair.Dt = e.Dt._text;
      pair.CcyAmt = [
        e.CcyAmt[0].Ccy._text,
        e.CcyAmt[0].Amt._text,
        e.CcyAmt[1].Ccy._text,
        Number(e.CcyAmt[1].Amt._text) //for graph
      ];
      return pair;
    });
    if (fxRates) {
      this.setState({
        fxRates: answer,
        dt: answer[0].Dt,
        ccy: "",
        fxRatesRange: ""
      });
    } else {
      this.setState({
        fxRatesRange: answer,
        dtTo: answer[0].Dt,
        dtFrom: answer[answer.length - 1].Dt
      });
    }
  };
  onDatesChange = e => {
    if (typeof e === "object") {
      this.setState({ dt: e.toJSON().slice(0, 10), fxRatesRange: "" });
      setTimeout(() => this.getFxRates(), 100);
    }
  };
  render() {
    // console.log("fxRate: ", this.state.fxRates);
    // console.log("fxRatesRange: ", this.state.fxRatesRange);
    // console.log("ccy :", this.state.ccy);
    // console.log("Dt :", this.state.dt);
    // console.log("dtto :", this.state.dtTo);
    // console.log("dtFrom :", this.state.dtFrom);
    const { tp, dt, ccy, dtFrom, dtTo, fxRates, fxRatesRange } = this.state;
    return (
      <React.Fragment>
        <Visual
          tp={tp}
          dt={dt}
          ccy={ccy}
          dtFrom={dtFrom}
          dtTo={dtTo}
          fxRates={fxRates}
          fxRatesRange={fxRatesRange}
          getFxRates={this.getFxRates}
          getFxRatesForCurrency={this.getFxRatesForCurrency}
          onDatesChange={this.onDatesChange}
          setCcy={this.setCcy}
          setDtTo={this.setDtTo}
          setDtFrom={this.setDtFrom}
        />
      </React.Fragment>
    );
  }
}

export default Index;
