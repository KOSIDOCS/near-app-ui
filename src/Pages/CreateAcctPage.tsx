import { useState } from "react";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import { ButtonToggle, ButtonContinue, ButtonLogin, ButtonLink } from "../Components/CustomBtn";
import { InputMain } from "../Components/CustomInputs";
import MainNavbar from "../Components/MainNavbar";

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


const schema = yup.object({
  firstName: yup.string().required(),
  age: yup.number().positive().integer().required(),
}).required();
  
const CreateAcctPage: React.FC = () => {


const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });
//   const onSubmit = data => console.log(data);
  
    return (
        <Container fluid="md">
        <Row>
          <MainNavbar title="Create NEAR account"/>
        </Row>
        <div style={{ margin: "0 auto", padding: "0px 32px"}}>
        <Row>
        <span 
        style={{fontSize: "14px", fontWeight: 300, fontStyle: "normal", marginTop: '40px', textAlign: 'left'}}>
        Enter an Account ID to use with your NEAR account. Your Account ID will be used for all NEAR operations, including sending and receiving assets.
        </span>
        </Row>
        <Row>
        <div className="mb-3 mt-4">
        <label htmlFor="fullname" className="form-label">Full Name</label>
        <InputMain {...register("FullName")} type="text" id="fullname" placeholder="Ex John doe" />
        </div>
        <div>
        <label htmlFor="acctid" className="form-label">Account ID</label>
        <div className="input-group">
          <input type="text" className="form-control" id="acctid" placeholder="yourname" aria-label="Recipient's username" aria-describedby="basic-addon2" />
          <span className="input-group-text" id="basic-addon2">.near</span>
         </div>
        </div>
        </Row>
        <Row>
            <ButtonContinue active={false}>Continue <i className="bi bi-chevron-right"></i></ButtonContinue>
        </Row>
        <Row>
           <div className="terms">
            <span style={{fontSize: "12px"}}>By creating a NEAR account, you agree to the NEAR Wallet  </span>
            <a style={{position: "relative",fontSize: "12px", top: "-1px", color: "blue"}}>Terms & Conditions </a> 
            <span style={{position: "relative",fontSize: "12px", top: "-1px"}}>and </span> 
            <a style={{position: "relative",fontSize: "12px", top: "-1px", color: "blue"}}>Privacy Policy</a>
            </div>
            <hr style={{ marginTop: "10px", width: "100%" }}/>
        </Row>
        <Row>
            <p style={{ textAlign: "center" }}>Already have NEAR account?</p>
            <ButtonLogin>Log in with NEAR <i className="bi bi-chevron-right" /></ButtonLogin>
        </Row>
        </div>
      </Container>
    );
  };
  
  export default CreateAcctPage;
  