import React  from "react";
const Offer =(props)=>{

console.log(props.offer)

let off=props.offer[0].offer_detail1.map((v,i)=>{

    return(
<h3 key={i}> {v.title}</h3>
    )
});
    return(
        <div>
            <div className="container-fluid offer-sec">
 <h3 className="text-center pt-4"> {props.offer[0].title}  </h3>
 <div className="container">

     <div className="row">
         <div className="col-4 pt-4 right-three-col">
             <h3> CONSISTENT RETURNS  </h3>
             <p>We assure you that for all your investments with us, 
                 you get your returns on time, paid annually or termwise throughout the investment period.</p>
                 <h3>FSCS COVERED FUNDS</h3>
                 <p>We have investment funds that are covered by the Financial Services Compensation Scheme (FSCS),
                      which provides an additional shield of protection to all investments up to £80,000.</p>
                      <h3>FLEXIBILITY & PERSONALISATION</h3>
                      <p>With us, you can personalise your portfolios with investments that are risk-free, ensure consistent
                           returns and meet all your financial goals with the principal investment as low as £5,000.</p>
         </div>
         <div className="col-4 pt-4 offer-center-img">
<img src={props.offer[0].offer_img} alt=""/>
         </div>
         <div className="col-4 pt-4 left-three-col">
             <h3>ACCESSIBLE CUSTOMER SERVICE</h3>
             <p>Throughout your investment period, we provide you with 24×7 customer service,
                  ensuring a continuous conversation with our team as and when needed.</p>
                  <h3>CAPITAL PROTECTION</h3>
                  <p>We ensure 100% capital protection at the end of the term with zero hidden charges applied.
                       After a brief investment period, you can tune or withdraw your investment as necessary.</p>
                       <h3>INVESTMENT GUIDANCE</h3>
                       <p>We provide comprehensive guidance and advisory services for our 
                           clients on their investments for better returns on investments and portfolio management.</p>
         </div>
     </div>
 </div>
            </div>
        </div>
    )
};
export default Offer;