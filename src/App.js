import { useEffect, useState } from "react";
import "./App.css";
import BmiList from "./components/BmiList";
import "bootstrap/dist/css/bootstrap.min.css";

import BmiScore from "./components/BmiScore";
import FormNew from "./components/FormNew";

function App() {
  const [bmi, setBmi] = useState("00");
  const [bmitype, setbmitype] = useState("Not calculated");

  const [bmiRange, setBmiRang] = useState({
    underWeight: { low: "" },
    normal: { low: "", high: "" },
    overWeight: { low: "", high: "" },
    obesityOne: { low: "", high: "" },
    obesityTwo: { low: "", high: "" },
    obesityThree: { high: "" },
  });
  const onFormsub = (w, h) => {
    let b = calBmi(w, h);
    setBmi(b);
    let btype = weightType(b);
    setbmitype(btype);
    console.log(w, h, b);

    const range = {
      underWeight: { low: calWeight(18.5, h) },
      normal: { low: calWeight(18.5, h), high: calWeight(24.9, h) },
      overWeight: { low: calWeight(25, h), high: calWeight(29.9, h) },
      obesityOne: { low: calWeight(30, h), high: calWeight(34.9, h) },
      obesityTwo: { low: calWeight(35, h), high: calWeight(39.9, h) },
      obesityThree: { high: calWeight(40, h) },
    };
    setBmiRang(range);
  };

  const calBmi = (w, h) => (w / (h * h)).toFixed(2);

  const calWeight = (b, h) => (b * h * h).toFixed(2);

  // function to get the weight type
  const weightType = (bmi) => {
    if (bmi < 18.5) {
      return "Underweight";
    } else if (18.5 < bmi && bmi < 24.9) {
      return "Normal";
    } else if (24.9 < bmi && bmi < 29.9) {
      return "Over Weight";
    } else if (29.9 < bmi && bmi < 34.9) {
      return "Obesity Class I";
    } else if (34.9 < bmi && bmi < 39.9) {
      return "Obesity Class II";
    } else if (bmi > 39.9) {
      return "Obesity Class III";
    }
  };

  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <FormNew getData={onFormsub} />
        </div>
        <div className="row mt-4">
          <div className="col-sm-6 mb-5">
            <BmiScore BmiNo={bmi} BmiName={bmitype} />
          </div>
          <div className="col-sm-6">
            <BmiList range={bmiRange} Bmi={bmi} />
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
