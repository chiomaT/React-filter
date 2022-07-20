import React, { useState } from "react";
import { Categories } from "../components/ItemCategories";

const ItemCategory = () => {
  const [data, setData] = useState(Categories);

  const filterResult = (catItem) => {
    const result = Categories.filter((curDate) => {
      return curDate.category === catItem;
    });
    setData(result);
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <h1 className="title"> Products in stock</h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <button onClick={() => setData(Categories)} className="btn">
            All
          </button>
          <button onClick={() => filterResult("men")} className="btn">
            Men
          </button>
          <button onClick={() => filterResult("women")} className="btn">
            Women
          </button>
          <button onClick={() => filterResult("kids")} className="btn">
            Kids
          </button>
        </div>
        <div className="col">
          <div className="cards">
            {data.map((values) => {
              const { id, title, price, image } = values;
              return (
                <div key={id} className="card">
                  <div className="card-title">
                    <img src={image} alt={title}></img>
                  </div>
                  <div className="card-body">
                    <h3>{title}</h3>
                    <span className="price">${price}</span>
                  </div>
                </div>
              );
            })}

            <div className="card-footer"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemCategory;
