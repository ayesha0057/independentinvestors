import React, {Component} from "react";
import Nav from "./Nav/Nav"
import Header from "./Header/Header"
import About from "./About/About"
import data from "./data";
import Offer from "./Offer/Offer"
import Capital from "./Capital/Capital"
import Compound from "./Compound/Compound";
import Clients from "./Clients/Clients";
import Form from "./Form/Form";
import Find from "./Find/Find";
import Footer from "./Footer/Footer";

class  Home extends Component{
    state={
        data: data
      }
      render(){
        return(
            <div>
            <Nav nav={this.state.data[0].nav}/>
            <Header header={this.state.data[0].header}/>
            <About  investments_per={this.state.data[0].investments_per} about_company={this.state.data[0].about_company}/>
            <Offer offer={this.state.data[0].offer}/>
            <Capital capital={this.state.data[0].capital_protection}/>
            <Compound compound={this.state.data[0].Compound_Interest_Calculator}/>
            <Clients happy={this.state.data[0].Happy_Clients}/>
            <Form form={this.state.data[0].contact_detail}/>
           <Find/>
           <Footer foot={this.state.data[0].footer_detail}/>
            </div>
                )
      }
};
export default  Home;