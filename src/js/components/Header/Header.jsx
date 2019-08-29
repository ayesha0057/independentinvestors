import React from "react";
const Header =(props)=>{
console.log(props.header)
let resp=props.header[0].per_value.map(function(v,i){

    return(
<li key={i}> <i className="fa fa-check"/><span style={{fontWeight:700}}>{v.type}</span> {v.investment} </li>
    )
});
let response=props.header[1].form_question_options.map((v,i) => {

  return(
 <option  key={i}> {v.option}</option>
 )
});
let respo=props.header[1].form_sum_options.map((v,i) => {

  return(
<option key={i}>{v.option}</option>
 )
});






    return(
        <div>

<div className="container-fluid">

  <div className="row">
  <div className="col">
  
<div className="main-img" 
style={{backgroundImage:`url(${props.header[0].header_main_img})`}}
> 
<div className="container">
<div className="row">
    <div className="col-8 main-info">
    <h5>{props.header[0].header_title}</h5>
<h2> {props.header[0].yearly_per}</h2>

<ul>

{resp}
</ul>
    </div>
</div>
<div className="col form">
<div className="side-part ">

<h5 className="text-center">{props.header[1].title}</h5>
<p className="text-center">{props.header[1].description}</p>
<div className="input-fields">
  <div className="input-list">
   <div className="one">
  
    <input type="text" placeholder={props.header[1].form_name} name="lastname"/>
   </div>
  <div className="two">
  
    <input type="text" placeholder={props.header[1].form_phone} name="lastname"/>
  </div> 
  <form >
  <div className="three">
    
    <input  type="text" placeholder={props.header[1].form_emailAdreeSS } name="lastname"/>
    </div>
  <div className="eight">
   
   <select name="">
     <option  value="selct" className="slect" selected> {props.header[1].form_question}</option>
    
    {response}
   </select>
  </div>
  <div className="eight">
   
   <select name="">
     <option  value="selct" selected> {props.header[1].form_sum}</option>
    {respo}
    
   </select>
  </div>
  <button className="btn btn-success"> {props.header[1].form_btn}</button>
  </form>
  </div>

</div>
</div>
</div>
</div>
</div>
  </div>
  </div>
</div>

        </div>
    )
};
export default Header;