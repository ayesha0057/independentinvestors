import React from "react";
const Form =(props)=>{
  let frm=props.form[0].form_question_options.map((v,i)=>{

    return(


      <option key={i}> {v.option}</option>
    )
});

    return(
        <div>

<div className="container-fluid form-sec">
<div className="container form-sec2">
    <div className="row">
    
    <div className="col-5 form-input">
      
      <div className="inner-content">
      <h5 className="text-center pt-4">{props.form[0].title}</h5>
      <form action="">
 <div className="row">
     <div className="col-6  pt-4 ">
     <input type="text" id="name" placeholder={props.form[0].form_name} for="name" class=" bg-light form-control fl-1
      form-control-md"/>
     </div>
     <div className="col-6 pt-4">
     <input type="text" id="name" placeholder={props.form[0].form_phone} for="name" class="
     fl-2 bg-light form-control form-control-md"/>
     </div>
     <div className="col-12  pt-4">
     <input type="text" id="name" placeholder={props.form[0].form_emailAdree} for="name" class=" 
      fl-3 bg-light form-control form-control-md"/>
     </div>
     <div className="col-12 pt-4 ">
     <select className="form-control   fl-4 form-control-md" name="">
     <option  value="selct" selected> Investment Sum</option>
     {frm}
    
   </select>
     </div>
     <div className="col-12  pt-4">
     <select className="form-control form-control-md fl-5" name="">
     <option  value="selct" className="slect">  {props.form[0].form_question}</option>
    {frm}
   </select>
     </div>
     <div className="col-12">
         <button className=" btn btn-success fl-6"> Contact Us</button>
     </div>
 </div>
          
      </form>
      </div>
    </div>
    <div className="col-6 form-info">
        <p>{props.form[1].reach_out}</p>
        <p> {props.form[1].goals}</p>
             <a href="/" > {props.form[1].phone_no} </a> <br/> <br/>
             <p> {props.form[1].GET_QUICKLY}</p>
             <p>{props.form[1].fill_description}</p>
    </div>
    </div>
    
</div>

</div> <br/> <br/>
        </div>
    )
};
export default Form;