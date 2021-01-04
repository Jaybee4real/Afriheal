import React, { Component } from "react";
import "../../styles/book-appointment.scss";
import Step1 from "./BookAppointment/step1";
import Step2 from "./BookAppointment/step2";
import Step3 from "./BookAppointment/step3";
import Step4 from "./BookAppointment/step4";

export default class BookAppointment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step1: "active",
      step2: "not-done",
      step3: "not-done",
      step4: "not-done",
      currentStep: "step1",
    };
  }

  render() {
    const handleStepChange = (step) => {
      switch (step) {
        case "step1":
          this.setState({
            step1: "done",
            currentStep: step,
          });
          break;
        case "step2":
          this.setState({
            step2: "done",
            currentStep: step,
          });
          break;
        case "step3":
          this.setState({
            step3: "done",
            currentStep: step,
          });
          break;
        case "step4":
          this.setState({
            step4: "done",
            currentStep: step,
          });
          break;
        default:
          break;
      }
      console.log(step);
    };

    const renderCurrentStep = () => {
      switch (this.state.currentStep) {
        case "step1":
          return <Step1 />;
        case "step2":
          return <Step2 />;
        case "step3":
          return <Step3 />;
        case "step4":
          return <Step4 />;
        default:
          return <Step1 />;
      }
    };

    return (
      <div
        className={`page-wrapper ${
          this.props.active === true ? "slide-in" : ""
        }`}
      >
        <div className="screen-title">
          <i className="far fa-calendar-day"></i>
          Appointments
        </div>

        <div className="steps-container">
          <div className="steps-counter">
            <div
              onClick={() => handleStepChange("step1")}
              className={`step-icon ${this.state.step1}`}
            >
              1
            </div>
            <div
              onClick={() => handleStepChange("step2")}
              className={`step-icon ${this.state.step2}`}
            >
              2
            </div>
            <div
              onClick={() => handleStepChange("step3")}
              className={`step-icon ${this.state.step3}`}
            >
              3
            </div>
            <div
              onClick={() => handleStepChange("step4")}
              className={`step-icon ${this.state.step4}`}
            >
              4
            </div>
          </div>
        </div>
        {renderCurrentStep()}
      </div>
    );
  }
}
