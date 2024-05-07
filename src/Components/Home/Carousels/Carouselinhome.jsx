import React, { useState, useEffect } from "react";
import "./Carouselinhome.css";

const Carouselinhome = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1)); // Assuming you have 3 carousel items
    }, 6000); // Interval time in milliseconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div
        id="carouselExampleInterval"
        className="carousel slide bg-success-subtle"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner shadow py-2">
          {/* 1 carousel */}
          <div
            className={`carousel-item ${index === 0 ? "active" : ""}`}
            data-bs-interval="6000"
          >
            <div className="container shadow-lg p-2 bg-success-subtle rounded">
              <div className="row ">
                <div className="outer-div align-items-center justify-content-center">
                  <div className="inner-div">
                    <h1 className="text-capitalize fw-bolder text-black text-center">
                      Welocome to Alok Genral Store.
                    </h1>
                    <h5 className="mt-3 mb-5 para-width text-success text-center">
                      We have minium 10% discount on Paytm transacton minimum
                      value of 999 and if you purchage 1999 then we have 15%
                      discount for this week !
                    </h5>
                  </div>

                  <div className="inner-div">
                    <div className="text-center">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_VpLgd5VUE2CTh89uXDriYuGmU8sT4FN2nw&usqp=CAU"
                        height="150px"
                        alt=""
                        className="rounded-4"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 2 carousel */}
          <div
            className={`carousel-item ${index === 1 ? "active" : ""}`}
            data-bs-interval="6000"
          >
            <div className="container shadow-lg p-2 bg-success-subtle rounded">
              <div className="row ">
                <div className="outer-div align-items-center justify-content-center">
                  <div className="inner-div">
                    <h1 className="text-capitalize fw-bolder text-black text-center">
                      Welocome to Alok Genral Store.
                    </h1>
                    <h5 className="mt-3 mb-5 para-width text-success text-center">
                      We have minium 10% cash back on GooglePe transacton
                      minimum value of 999 and if you purchage 1999 then we have
                      18% discount for this week !
                    </h5>
                  </div>

                  <div className="inner-div">
                    <div className="text-center">
                      <img
                        src="data:image/png;base64,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"
                        height="150px"
                        alt=""
                        className="rounded-4"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 3 carousel */}
          <div
            className={`carousel-item ${index === 2 ? "active" : ""}`}
            data-bs-interval="6000"
          >
            <div className="container shadow-lg p-2 bg-success-subtle rounded">
              <div className="row ">
                <div className="outer-div align-items-center justify-content-center">
                  <div className="inner-div">
                    <h1 className="text-capitalize fw-bolder text-black text-center">
                      Welocome to Alok Genral Store.
                    </h1>
                    <h5 className="mt-3 mb-5 para-width text-success text-center">
                      We have minium 15% discount on PhonePe transacton minimum
                      value of 999 and if you purchage 1999 then we have 13%
                      discount for this week !
                    </h5>
                  </div>

                  <div className="inner-div">
                    <div className="text-center">
                      <img
                        src="data:image/png;base64,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"
                        height="150px"
                        alt=""
                        className="rounded-4"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button 
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button> */}
        
      </div>
    </>
  );
};

export default Carouselinhome;
