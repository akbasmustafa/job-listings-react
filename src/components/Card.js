import React from "react";

function Card({ data }) {
  console.log(data);
  return (
    <div className="row shadow m-3">
      <div className="col-12 col-md-2 d-flex justify-content-center align-items-center">
        <img src={data.logo} alt={data.id} />
      </div>
      <div className="col-12 col-md-5">
        <div className="d-flex justify-content-start align-items-center">
          <span className="badge text-primary fs-3">{data.company}</span>
          <span className="badge bg-info rounded-pill p-1 m-1">
            {data.new ? "New" : ""}
          </span>
          <span className="badge bg-dark rounded-pill p-1 m-1">
            {data.featured ? "Feature" : ""}
          </span>
        </div>
        <div className="text-start m-2 ms-3 text-secondary fw-bold">
          {data.position}
        </div>
        <div className="d-flex justify-content-start">
          <span className="badge text-secondary m-2">{data.postedAt}</span>.
          <span className="badge text-secondary m-2">{data.contract}</span>.
          <span className="badge text-secondary m-2">{data.location}</span>
        </div>
      </div>
      <div className="col-12 col-md-5">
        <span className="badge text-secondary m-2 p-2 bg-light">
          {data.role}
        </span>
        <span className="badge text-secondary m-2 p-2 bg-light">
          {data.level}
        </span>
        {data.tools.map((item, index) => (
          <span className="badge text-secondary m-2  p-2 bg-light" key={index}>
            {item}
          </span>
        ))}
        {data.languages.map((item, index) => (
          <span className="badge text-secondary m-2  p-2 bg-light" key={index}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Card;
