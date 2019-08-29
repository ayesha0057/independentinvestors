import React from "react";

const Compound =(props)=>{
console.log(props.compound)
    return(
        <div>
            <div className="container-fluid compound-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-8 compound-info">
                            <h1> {props.compound[0].title}</h1>
                            <p>{props.compound[0].description1} </p>
<p>
{props.compound[0].description2}

</p>
                        </div>
                        <div className="col-4">
                            <div className="whole-cal ">
<div className="calc-info">
<div className="one-input">
<label > {props.compound[1].form_input_title}</label>
<input type="text" name="one" id=""/> 
</div>
<div className="two-input">
<label > {props.compound[2].form_input_title}</label>
<input type="text" name="one" id=""/> 
</div>
<div className="three-input">
<label > {props.compound[3].form_input_title}</label>
<input type="text" name="one" id=""/> 
</div>
<div className="four-input">
<label >{props.compound[5].form_input_title}</label>
<input type="text" name="one" id=""/> 
</div>
<button className="btn btn-secondary"> {props.compound[6].form_btn} </button>
<div className="five-input">
    <label htmlFor="">{props.compound[6].Interest_Amount}</label>
    <p> {props.compound[6].percentage} </p> 
</div>
</div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

<br/> <br/> <br/>
        </div>
        
    )
}
export default Compound;