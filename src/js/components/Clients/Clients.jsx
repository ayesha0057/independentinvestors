import React from "react"
const Clients = (props)=>{
    let hap=props.happy[0].client_data.map((v,i)=>{

        return(
            <img  key={i} src={v.client_img} alt=""/>
        )
    });

    let happen=props.happy[0].client_data.map((v,i)=>{

        return(
           <p key={i}>{v.client_description} </p>
        )
    });

    return(
        <div>

<div className="container-fluid clients-sec">
<div className="container">
    <h1 className="text-center "> {props.happy[0].title}</h1>
    <p className="text-center"> {props.happy[0].description}</p>


 <div className="container">
     <div className="row whole-sec">
         <div className="col client-1">
<div className="inner-part1">
<div className="img-client     text-center ">
    {hap[0]}
</div>
<p> {happen[0]}</p>
    <h5>
    TERRY PARKER
    </h5>
</div>
         </div>
         <div className="col client-2">
<div className="inner-part2">
<div className="img-client2     text-center ">
{hap[1]}
</div>
<p>{happen[1]}</p>
    <h5>
    MATHEW JENSON
    </h5>
</div>
         </div>
         <div className="col client-3">
<div className="inner-part3">
<div className="img-client     text-center ">
{hap[2]}
</div>
<p>{happen[2]}</p>
    <h5>
    MARIAM SALAM
    </h5>
</div>
         </div>

     </div>
 </div>

</div>

</div>
        </div>
    )
}
export default Clients;