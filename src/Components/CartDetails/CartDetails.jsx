import React, { useState } from "react";
import "./CartDetails.css";


const CartDetails = () => {
  const img1 = "https://rukminim2.flixcart.com/image/612/612/xif0q/hair-oil/e/g/s/-original-imagsgghtyp6kf2w.jpeg?q=70";
  const img2 = "https://rukminim2.flixcart.com/image/612/612/xif0q/hair-oil/9/u/l/30-godfather-lite-beard-and-moustache-oil-30-ml-non-sticky-light-original-imahyghzamad7jjq.jpeg?q=70"
  const img3 = "https://rukminim2.flixcart.com/image/612/612/xif0q/hair-oil/n/s/2/-original-imagw3nugerfvju6.jpeg?q=70"
  const [show, setShow] = useState(img2)
  const [con, setCon] = useState(false);
  
  const imgEnter = (img) =>{
    setShow(img)
  }
  const imgDown = (img) => {
    setShow(img)
  }
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-4 bg-danger d-flex">
            <ul class="nav flex-column">
              <li class="nav-item groupImg">
                <img
                  src={
                    img1
                  }
                  className="img-fluid itemImage"
                  onMouseEnter={() => imgEnter(img1)}
                  // onMouseOut={() => imgDown(img2)}
                  alt="Description of the image"
                />
              </li>
              <li class="nav-item groupImg">
                <img
                  src={
                    img2
                  }
                  onMouseEnter={() => imgEnter(img2)}
                  // onMouseOut={() => imgDown(img2)}
                  className="itemImage"
                />
              </li>
              <li class="nav-item groupImg">
                <img
                  src={
                    img3
                  }
                  onMouseEnter={() => imgEnter(img3)}
                  className="itemImage"
                />
              </li>   
            </ul>

            <div>
                  <img className="" src={show} alt="somting bad happend" />
            </div>
          </div>


          <div className="col-8 bg-success">
            <h1>hii</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartDetails;
