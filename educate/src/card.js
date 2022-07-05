import React from 'react'
import {Link}  from 'react-router-dom'
const Card = (props) => {
  return (
      <div data-aos={props.aos} data-aos-offset={props.aos_offset} className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
          <div className="card p-0 overflow-hidden h-100 shadow">
            <img src={props.img} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{props.title}</h5>
              <p className="card-text">{props.description}</p>
            <Link to={`course/${74489439}`}><button type="button" className="btn btn-primary btn-lg">Buy</button></Link>
            </div>
          </div>
        </div>
  )
}

export default Card