import React from "react";
const Footer=(props)=>{



    return(

        <div>
<div className="container-fluid main-footer">
    <div className="container">
    <div className="row">
        <div className="col-4 left-info-footer">
<h5>{props.foot[0].contact_title}</h5>

<p>
{props.foot[0].Adress} <br/>
{props.foot[0].phone_no} <br/> 
8AG UK
</p> 
<a href="/" className="text-light"> Phone: +44 203 695 1157</a>
        </div>
        <div className="col-7 right-info-footer ">
            <h3>{props.foot[1].contac_about_title}</h3>
            <p> {props.foot[1].description}</p>
                 <br/>
        </div>
    </div>
    </div>
</div>

<div className="container-fluid bottom-footer">
    <div className="container">
        <div className="row">
      <div className="col copy-right text-center">
      &copy;  {props.foot[2].copyright}
      </div>
        </div>
    </div>
</div>

        </div>
    )
} ;

export default Footer;