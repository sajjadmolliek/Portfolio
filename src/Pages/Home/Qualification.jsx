import HeadingStyle from "../../Components/HeadingStyle/HeadingStyle";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import { useState } from "react";



const Qualification = () => {
  const steps = [
    {
      label: "Under-Graduate",
      description: `University: Green University Of Bangladesh`,
      subject: `Department: B.Sc. in Computer Science & Engineering`,
      year: `Session: 2021- present `
    },
    {
      label: "Higher Secondary Certificate",
      description: `College: Govt. Bangabandhu College`,
      subject: `Group: Science`,
      year: `Session: 2017- 2019 `
    },
    {
      label: "Secondary School Certificate",
      description: `School: S.M. Model High School`,
      subject: `Group: Science`,
      year: `Session: 2016- 2017 `
    },
  ];

  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  return (
    <div className="my-24">
      <HeadingStyle heading={"My Qualification"}></HeadingStyle>
      <div>
        <Box className="lg:w-[20rem] mx-auto text-white mt-10 px-10">
          <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((step, index) => (
              <Step key={step.label}>
                <StepLabel
                  optional={
                    index === 2 ? (
                      <p className=" bg-clip-text text-transparent bg-gradient-to-r from-[#FF0000] to-white">Last step</p>
                    ) : null
                  }
                >
                  <p className="text-white">{step.label}</p>
                </StepLabel>
                <StepContent>
                  <p className="text-white text-xl">{step.description}</p>
                  <p className="text-white">{step.subject}</p>
                  <p className="text-white mt-5">{step.year}</p>
                  <Box sx={{ mb: 2 }}>
                    <div>
                      <button
                        className="bg-[#FF0000] px-4 py-1 rounded-md mr-2"
                        onClick={handleNext}
                        
                      >
                        {index === steps.length - 1 ? "Finish" : "Continue"}
                      </button>
                      <button
                      className="border-[#FF0000] border-2 px-4 py-1 rounded-md"
                        disabled={index === 0}
                        onClick={handleBack}
                        
                      >
                        Back
                      </button>
                    </div>
                  </Box>
                </StepContent>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length && (
            <>
              <p>
                All steps completed - you&apos;re finished
              </p>
              <button onClick={handleReset} className="border-[#FF0000] border-2 px-4 py-1 rounded-md mr-2">
                Go top
              </button>
              <button onClick={handleBack} className="bg-[#FF0000] px-4 py-1 rounded-md">
                Back
              </button>
            </>
          )}
        </Box>
      </div>
    </div>
  );
};

export default Qualification;
