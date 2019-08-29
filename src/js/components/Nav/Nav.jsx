import React from "react";

const Nav =(props)=>{ 
console.log(props.nav)
let res=props.nav[0].nav_link.map(function(v,i){
    return(
<a href="#" key={i}> <li> {v.link}</li> </a>
    )
})
return(
<div>


<div className="container-fluid">
    <div className="container">
    <div className="row">
        
        <div className="col-4 logo">
        <div> <a class="navbar-brand" href="#">
            <img src={props.nav[0].logo_img} alt=""/>
            </a></div>

        </div>
<div className="col-6">
    <nav className="list">
        <ul >
            {res}
        </ul>
       
    </nav>

</div>
<div className="col-2 alert-box">
<div className="btn box-1">
    <i className=" fa fa-phone"></i> {props.nav[0].phone_no}</div>
</div>

    </div>
    </div>
</div>
</div>
)

};
export default Nav;