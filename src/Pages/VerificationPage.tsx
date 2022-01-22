import { useState } from "react";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import { ButtonToggle, ButtonContinue, ButtonLogin, ButtonLink } from "../Components/CustomBtn";
import { InputMain } from "../Components/CustomInputs";
import MainNavbar from "../Components/MainNavbar";

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import ReactCodeInput from "react-code-input";

const schema = yup.object({
  firstName: yup.string().required(),
  age: yup.number().positive().integer().required(),
}).required();
  
const VerificationPage: React.FC = () => {

const [presentForm, setPresentForm ] = useState<string>("");

const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });
//   const onSubmit = data => console.log(data);
  
    return (
        <Container fluid="md">
        <Row>
          <MainNavbar title="Verification"/>
        </Row>
        <div style={{ margin: "0 auto", padding: "0px 32px"}}>
        <Row>
        <span style={{fontSize: "14px", fontWeight: 500, fontStyle: "normal", marginTop: '40px'}}>We've sent a 6-digit verification code to the email address  </span>
        <span style={{fontSize: "14px", fontWeight: 500, color: 'blue', fontStyle: "normal", marginTop: '10px'}}>johndoe@gmail.com </span>
        </Row>
        <Row>
        <span style={{fontSize: "14px", color: 'grey', fontWeight: 400, fontStyle: "normal", marginTop: '30px'}}>Enter verification code</span>
        <div className="custom-styles">
        <ReactCodeInput
        name="resetPassword"
        inputMode="numeric"
        fields={6}
        type="text"
        // onChange={(e) => handleValueInput(e)}
        // isValid={true}
        autoFocus={true}
        
      />
       </div>
        </Row>
        <Row>
            <ButtonContinue active={false}>Continue <i className="bi bi-chevron-right"></i></ButtonContinue>
        </Row>
        <Row>
            <hr style={{ marginTop: "40px" }}/>
        </Row>
        <Row>
            <p>Didn't receive your code?</p>
            <ButtonLink>Send to a different email address</ButtonLink>
            <ButtonLink>Resend your code </ButtonLink>
            
        </Row>
        </div>
      </Container>
    );
  };
  
  export default VerificationPage;
  