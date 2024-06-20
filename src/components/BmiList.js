import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function BmiList({ range, Bmi }) {
  console.log(Bmi);
  return (
    <div className="text-center shadow-sm rounded">
      <ul className="list-group ">
        <li className="list-group-item ">
          <div className="row">
            <div className="col-4 fw-bold">Type</div>
            <div className="col-4 fw-bold">BMI</div>
            <div className="col-4 fw-bold">WEIGHT</div>
          </div>
        </li>
        <li
          className={
            Bmi < 18.5
              ? "border border-danger border-3 list-group-item"
              : "list-group-item"
          }
        >
          <div className="row">
            <div className="col-4 ">Underweight</div>
            <div className="col-4 ">&lt; 18.5</div>
            <div className="col-4 ">{range.underWeight.low} kg</div>
          </div>
        </li>
        <li
          className={
            18.5 < Bmi && Bmi < 24.9
              ? "border border-danger border-3 list-group-item"
              : "list-group-item"
          }
        >
          <div className="row">
            <div className="col-4 ">Normal</div>
            <div className="col-4 ">18.5-24.9</div>
            <div className="col-4 ">
              {" "}
              {range.normal.low + " kg -" + range.normal.high + " kg"}
            </div>
          </div>
        </li>
        <li
          className={
            24.9 < Bmi && Bmi < 29.9
              ? "border border-danger border-3 list-group-item"
              : "list-group-item"
          }
        >
          <div className="row">
            <div className="col-4 ">Over Weight</div>
            <div className="col-4 ">25-29.9</div>
            <div className="col-4 ">
              {" "}
              {range.overWeight.low + " kg -" + range.overWeight.high + " kg"}
            </div>
          </div>
        </li>
        <li
          className={
            29.9 <  Bmi && Bmi < 34.9
              ? "border border-danger border-3 list-group-item"
              : "list-group-item"
          }
        >
          <div className="row">
            <div className="col-4 ">Obesity Class I</div>
            <div className="col-4 ">30-34.9</div>
            <div className="col-4 ">
              {range.obesityOne.low + " kg -" + range.obesityOne.high + " kg"}
            </div>
          </div>
        </li>
        <li
          className={
            34.9 < Bmi && Bmi < 39.9
              ? "border border-danger border-3 list-group-item"
              : "list-group-item"
          }
        >
          <div className="row">
            <div className="col-4 ">Obesity Class II</div>
            <div className="col-4 ">35-39.9</div>

            <div className="col-4 ">
              {" "}
              {range.obesityTwo.low + " kg -" + range.obesityTwo.high + " kg"}
            </div>
          </div>
        </li>
        <li
          className={
            Bmi > 39.9
              ? "border border-danger border-3 list-group-item"
              : "list-group-item"
          }
        >
          <div className="row">
            <div className="col-4 ">Obesity Class III</div>
            <div className="col-4 ">&gt; 40</div>
            <div className="col-4 ">&gt; {range.obesityThree.high + " kg"}</div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default BmiList;
