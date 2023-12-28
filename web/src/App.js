import React, { useState } from 'react';
import {sum,subtract} from 'common';

function App() {
  const [inputValues, setInputValues] = useState({
    value1: 0,
    value2: 0,
  });
  // State to store the sum
  const [result, setResult] = useState(0);

  // Function to update input values
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  // Function to calculate and update the sum
  const calculateSum = () => {
    const value1 = parseFloat(inputValues.value1) || 0;
    const value2 = parseFloat(inputValues.value2) || 0;
    const result = sum(value1,value2);
    setResult(result);
  };
  const calculateSub = () => {
    const value1 = parseFloat(inputValues.value1) || 0;
    const value2 = parseFloat(inputValues.value2) || 0;
    const result = subtract(value1,value2);
    setResult(result);
  };
  return (
    <div className="App">
      <header className="justify-content-center py-3 mb-4 border-bottom">
        <div className="container">
          <div className="d-flex flex-wrap ">
            <a
              href="/"
              className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
            >

              <span className="fs-4">Test App</span>
            </a>

            <ul className="nav nav-pills">
              <li className="nav-item">
                <a
                  href="/"
                  className="nav-link active"
                  aria-current="page"
                >Home</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <section className="py-5 border-bootom">
        <div className="container">
          <h1 className="text-center">
            Welcome to TestApp
          </h1>
        </div>
      </section>
      <section className="py-4">
        <div className="container">
          <div className="mb-3 row">
            <div className="col-sm-6">

              <input
                type="number"
                name="value1"
                className="form-control"
                value={inputValues.value1}
                onChange={handleInputChange}
              />
            </div>
            <div className="col-sm-6">

              <input
                type="number"
                name="value2"
                className="form-control"
                value={inputValues.value2}
                onChange={handleInputChange}


              />
            </div>
            <hr className="mt-3" />
            <div className="mb-3 mt-3 text-center row">
              <div className="col-sm-12">
                <button
                  className="btn btn-success btn-sm mx-2"
                  onClick={calculateSum}
                >
                  Calculate Sum
                </button>
                <button
                  className="btn btn-info btn-sm mx-2"
                  onClick={calculateSub}
                >
                  Calculate Substraction
                </button>
              </div>
            </div>
          </div>

          <div className="mb-3">

            <div
              id="print"
              className="row py-3"
            >
              <h3>Output : {result}</h3>
            </div>
          </div>
        </div>
      </section>
      <footer className=" fixed-bottom pt-3  border-top">
        <div className="container">
          <p className="text-center text-body-secondary">
            © 2023 Company, Inc
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
