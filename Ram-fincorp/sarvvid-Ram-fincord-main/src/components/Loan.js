import React, { useState } from "react";
import { Button } from "reactstrap";

const Loan = () => {
  const [principal, setPrincipal] = useState(0);
  const [rate, setRate] = useState(0);
  const [time, setTime] = useState(0);
  const [emi, setEmi] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  const calculateEmi = () => {
    const calculatedEmi =
      (principal * rate * time) / (12 * (1 - (1 + rate / 12) ** (-12 * time)));
    setEmi(calculatedEmi);
    setTotalInterest(calculatedEmi * time - principal);
    setTotalAmount(calculatedEmi * time);
  };
  const [showLoanModel, setShowLoanModel] = useState(false);
  const [showLoanCalculation, setShowLoanCalculation] = useState(false);
  const showcontenthandler = () => {
    setShowLoanModel(!showLoanModel);
  };
  const showLoanCalculationhandler = () => {
    setShowLoanCalculation(!showLoanCalculation);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ width: "100%" }}>
        <div>
          <h4>Monthly EMI</h4>
          <h1>Loan Interest Calculator</h1>
          <div>
            <input type="checkbox" />
            Calculate loan in year
          </div>
        </div>
        <div style={{ padding: "20px", fontSize: "25px" }}>
          <label>Loan Amount: {principal}</label>
          <input
            type="range"
            min="5000"
            max="200000"
            step="1000"
            value={principal}
            onChange={(e) => setPrincipal(e.target.value)}
          />
          <br />
        </div>
        <div style={{ padding: "20px", fontSize: "25px" }}>
          <label>Loan Term: {time / 12} years</label>
          <input
            type="range"
            min="1"
            max="20"
            step="1"
            value={time / 12}
            onChange={(e) => setTime(e.target.value * 12)}
          />
          <br />
        </div>
        <div style={{ padding: "20px", fontSize: "25px" }}>
          <label>Interest Rate: {rate * 100}%</label>
          <input
            type="range"
            min="5"
            max="36"
            step="1"
            value={rate * 100}
            onChange={(e) => setRate(e.target.value / 100)}
          />
          <br />
          <Button onClick={calculateEmi}>Calculate EMI</Button>
        </div>
      </div>
      <div style={{ width: "100%", padding: "0 2% 2% 2%" }}>
        <div
          style={{
            backgroundColor: "blue",
            textAlign: "center",
            fontSize: "35px",
            padding: "30px 20px 20px 20px",
          }}
        >
          How Much You Need
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            padding: "5% 7%",
          }}
        >
          <p>Monthly EMI</p>
          <p>{emi.toFixed(2)}</p>
        </div>
        <hr />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            padding: "5% 7%",
          }}
        >
          <p>Total Interest</p>
          <p>{totalInterest.toFixed(2)}</p>
        </div>
        <hr />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            padding: "5% 7%",
          }}
        >
          <p>Total Amount Payable</p>
          <p>{totalAmount.toFixed(2)}</p>
        </div>
        <div style={{ paddingTop: "5%", textAlign: "center" }}>
          <button
            style={{
              border: "none",
              backgroundColor: "blue",
              borderRadius: "10px",
              fontSize: "25px",
              width: "80%",
              padding: "10px auto",
            }}
          >
            Apply For Loan
          </button>
        </div>
      </div>
      <div>
        <Button onClick={() => showcontenthandler()}>
          Loan Model <span className="mdi mdi-arrow-down"></span>
        </Button>
        {showLoanModel ? (
          <ul style={{ paddingLeft: "50px" }}>
            <li style={{ marginTop: "5px" }}>
              Loan Amount: - 5,000 to 2,00,000
            </li>
            <li style={{ marginTop: "5px" }}>
              Interest Rate: - Up to 36% per annum
            </li>
            <li style={{ marginTop: "5px" }}>APR: 36% MAX</li>
            <li style={{ marginTop: "5px" }}>Age: - 21 to 55 years</li>
            <li style={{ marginTop: "5px" }}>APR 36 % Max.</li>
            <li style={{ marginTop: "5px" }}>
              Late payment fee - as applicable (Charged only, if repayment is
              delayed)
            </li>
            <li style={{ marginTop: "5px" }}>Processing Fee: - Up to 5%</li>
            <li style={{ marginTop: "5px" }}>
              Loan tenure: - 90 days to 365 days
            </li>
            <li style={{ marginTop: "5px" }}>
              Pre-closure charges – As applicable
            </li>
          </ul>
        ) : null}
      </div>
      <div>
        <Button className="mt-2" onClick={() => showLoanCalculationhandler()}>
          Sample Loan Calculation
          <span className="mdi mdi-arrow-down"></span>
        </Button>
        {showLoanCalculation ? (
          <ul style={{ paddingLeft: "50px" }}>
            <li style={{ marginTop: "5px" }}>
              Loan amount: ₹ 30,000 at interest rate of 30% p.a.
            </li>
            <li style={{ marginTop: "5px" }}>Loan Duration: 3 Months</li>
            <li style={{ marginTop: "5px" }}>
              Total personal loan interest = ₹ 2,250
            </li>
            <li style={{ marginTop: "5px" }}>
              Processing fees (PF) + GST = ₹ 500 + ₹ 90 = ₹ 590
            </li>
            <li style={{ marginTop: "5px" }}>
              Total Deductibles (PF + GST): ₹ 590
            </li>
            <li style={{ marginTop: "5px" }}>
              In-Hand Amount: Loan Amount - Total Deductibles = ₹ 30,000 - 590 =
              ₹ 29,410
            </li>
            <li style={{ marginTop: "5px" }}>
              Total repayable Amount (Loan Amount + Interest): ₹ 32,250
            </li>
            <li style={{ marginTop: "5px" }}>
              Monthly EMI Repayable (Loan Amount + Interest / No of EMI's): ₹
              10,750
            </li>
            <li style={{ marginTop: "5px" }}>
              PF + GST are deducted upfront during the loan disbursal.
            </li>
          </ul>
        ) : null}
      </div>
    </div>
  );
};

export default Loan;
