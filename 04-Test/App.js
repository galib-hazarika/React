import React from "react";
import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
function Button({ bgColor, color, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: color }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
//Reusability using children props
function Message({ step, children }) {
  return (
    <p className='message'>
      Step{step}: {children}
    </p>
  );
}
function App() {
  const [isOpen, setIsopen] = useState(true);
  const [step, setStep] = useState(1);
  const goToPrevious = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };
  const goToNext = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };
  return (
    <>
      <button className='close' onClick={() => setIsopen((isOpen) => !isOpen)}>
        &times;
      </button>
      ;
      {isOpen && (
        <div className='steps'>
          <div className='numbers'>
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <Message step={step}>{messages[step - 1]}</Message>
          <div className='buttons'>
            <Button bgColor={"#7950f2"} color={"#fff"} onClick={goToPrevious}>
              👈 Previous
            </Button>
            <Button bgColor={"#7950f2"} color={"#fff"} onClick={goToNext}>
              Next 👉
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
export default App;
import React from "react";
import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
function Button({ bgColor, color, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: color }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
//Reusability using children props
function Message({ step, children }) {
  return (
    <p className='message'>
      Step{step}: {children}
    </p>
  );
}
function App() {
  const [isOpen, setIsopen] = useState(true);
  const [step, setStep] = useState(1);
  const goToPrevious = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };
  const goToNext = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };
  return (
    <>
      <button className='close' onClick={() => setIsopen((isOpen) => !isOpen)}>
        &times;
      </button>
      ;
      {isOpen && (
        <div className='steps'>
          <div className='numbers'>
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <Message step={step}>{messages[step - 1]}</Message>
          <div className='buttons'>
            <Button bgColor={"#7950f2"} color={"#fff"} onClick={goToPrevious}>
              👈 Previous
            </Button>
            <Button bgColor={"#7950f2"} color={"#fff"} onClick={goToNext}>
              Next 👉
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
export default App;
