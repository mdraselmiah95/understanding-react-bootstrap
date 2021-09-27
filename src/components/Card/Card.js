import React from "react";

const Card = (props) => {
  console.log(props.item);
  const { name, img, dis } = props.item;
  return (
    <div className="col rounded">
      <div className="card">
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{dis}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
