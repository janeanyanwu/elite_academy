import React from "react";
import "./PriceList.css";

const PriceList = () => {
  return (
    <div>
      <h3> Tuition Fee</h3>
      <div className="tuition-fee">
        <span> Prekg -- Nursery Two :: 50,000 per term </span>
        <span> Primary One -- Primary Five :: 75,000 per term</span>
        <span> JSS One -- JSS Three :: 90,000 per term</span>
        <span> SSS One -- SSS Three :: 100,000 per term</span>
      </div>
      <h3> Other Fees </h3>
      <div className="other-fees">
        <span> Application Form :: 15,000</span>
        <span>Uniform (3 sets) :: 30,000 - 60,000</span>
        <span> School Shoe :: 10,000 - 15,000</span>
        <span> School Sock :: 1000 - 2000</span>
        <span> School Sweater :: 10,000</span>
      </div>
    </div>
  );
};

export default PriceList;
