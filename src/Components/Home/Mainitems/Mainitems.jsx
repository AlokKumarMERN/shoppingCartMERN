import React from "react";
import "./Mainitem.css";
import Carts from "../../Cart/Carts";
import { ItemListGrocery, ItemListBeauty } from "../Itemlist/ItemList";

const Mainitems = () => {
  return (
    <>
      {/* first Groceries items */}
      <div className="pt-3">
        <h2 className="text-center">Grocery Products</h2>
        <hr style={{ width: "40%", margin: "0 auto", borderWidth: "4px" }} />
        <div className="container-fluid p-3">
          <div className="row row-cols-2 row-cols-md-4 row-cols-sm-4 row-cols-lg-6 g-3 justify-content-center">
            {ItemListGrocery.map((cardData) => (
              <div className="col" key={cardData.id}>
                <Carts
                 
                  name={cardData.itemName}
                  img={cardData.itemImage}
                  para={cardData.itemDesc}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* second Beauty products */}
      <div className="pt-3">
        <h2 className="text-center">Beauty Products</h2>
        <hr style={{ width: "40%", margin: "0 auto", borderWidth: "4px" }} />
        <div className="container-fluid p-3">
          <div className="row row-cols-2 row-cols-md-4 row-cols-sm-4 row-cols-lg-6 g-3 justify-content-center">
            {ItemListBeauty.map((cardData) => (
              <div className="col" key={cardData.id}>
                <Carts
                  key={ItemListBeauty.id}
                  name={cardData.itemName}
                  img={cardData.itemImage}
                  para={cardData.itemDesc}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <br />
    </>
  );
};

export default Mainitems;
