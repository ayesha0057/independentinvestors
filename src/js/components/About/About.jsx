import React from "react";
const About = (props)=>{
console.log(props.investments_per)

return(
    <div>
<div className="container-fluid about-bg" >

    <div className="container">
<div className="row list-about ">
   

    <div className="col-2 list-1">
        <h1 className="text-center">{props.investments_per[0].percentage}</h1>
        <p className="text-center">{props.investments_per[0].description}</p>
    </div>
    <div className="col-2  list-2 ">
        <h1 className="text-center"> {props.investments_per[0].percentage}</h1>
        <p className="text-center">{props.investments_per[0].description}</p>
    </div>
    <div className="col-2 list-3">
        <h1 className="text-center">5k</h1>
        <p className="text-center">{props.investments_per[0].description}</p>
    </div>
    <div className="col-2 list-4">
        <h1 className="text-center">{props.investments_per[0].percentage}</h1>
        <p className="text-center">{props.investments_per[0].description}</p>
    </div>
   
</div>
<div className="row">

<div className="col-6 about-info">
    <h1>{props.about_company[0].title}</h1>
    <p>{props.about_company[0].description} <br/> {props.about_company[0].description_part}</p>
   
</div>
<div className="col-6 invest-img">
    <img src={props.about_company[0].about_img} alt=""/>
</div>
</div>
    </div>
</div>


    </div>
)



};
export default About;