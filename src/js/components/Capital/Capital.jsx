import React from "react";
const Capital =(props)=>{
console.log(props.capital)
    return(
        <div>

<div className="container-fluid capital">
    <h3> {props.capital[0].title}<strong>  {props.capital[0].strong}</strong></h3>
    <div className="container">
        <div className="row">
            <div className="col-6 capital-info">
               
              <p> {props.capital[0].description1}</p> 
<p> {props.capital[0].description2}</p>

<p>{props.capital[0].description3}</p> <br/> <br/>
               
            </div>
            <div className="col-6 capital-img">
                <img src={props.capital[0].capital_protection_img} alt=""/> <br/>
            </div>
        </div>
    </div>
</div>
        </div>
    )
};

export default Capital;

