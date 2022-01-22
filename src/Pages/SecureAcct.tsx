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
  
const SecureAcct: React.FC = () => {

const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });
//   const onSubmit = data => console.log(data);
  
    return (
        <Container fluid="md">
        <Row>
          <MainNavbar title="Secure your account"/>
        </Row>
        <div style={{ margin: "0 auto", padding: "0px 32px"}}>
        <Row>
        <span 
        style={{fontSize: "14px", fontWeight: 300, fontStyle: "normal", marginTop: '40px', textAlign: 'left'}}>
        Keep your apps safe from other with access to your computer.
        </span>
        </Row>
        <Row>
        <div className="mb-3 mt-4">
        <label htmlFor="fullname" className="form-label">Password</label>
        <InputMain {...register("FullName")} type="password" id="fullname" placeholder=" " />
        </div>

        <div>
        <label htmlFor="acctid" className="form-label">Confirm Password</label>
        <InputMain {...register("FullName")} type="password" id="acctid" placeholder=" " />
        </div>
        </Row>
        <Row>
            <ButtonContinue active={false}>Continue <i className="bi bi-chevron-right"></i></ButtonContinue>
        </Row>
        <Row>
           <div className="terms">
            <p style={{fontSize: "12px", color: "black", fontWeight: "500"}}>claudio@metapool.app</p>
            <span style={{fontSize: "12px"}}>By creating a NEAR account, you agree to the NEAR Wallet  </span>
            <a style={{position: "relative",fontSize: "12px", top: "-1px", color: "blue"}}>Terms & Conditions </a> 
            <span style={{position: "relative",fontSize: "12px", top: "-1px"}}>and </span> 
            <a style={{position: "relative",fontSize: "12px", top: "-1px", color: "blue"}}>Privacy Policy</a>
            </div>
        </Row>
        </div>
      </Container>
    );
  };
  
  export default SecureAcct;
  