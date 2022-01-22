import { useState } from "react";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import { ButtonToggle, ButtonContinue, ButtonLogin } from "../Components/CustomBtn";
import { InputMain } from "../Components/CustomInputs";
import MainNavbar from "../Components/MainNavbar";

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
  firstName: yup.string().required(),
  age: yup.number().positive().integer().required(),
}).required();

const HomePage: React.FC = () => {

const types = ["Email", "Phone"];

const [presentForm, setPresentForm ] = useState<string>("");

const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = data => console.log(data);

  function ToggleGroup({ callack }: any) {

    const [active, setActive] = useState(types[0]);

    const handleClick = (type: string) => {
        setActive(type);
        callack(type);
    }
    return (
      <div>
        {types.map((type) => (
          <ButtonToggle key={type} active={active === type} onClick={() => handleClick(type)}>
              {type}
          </ButtonToggle>
        ))}
      </div>
    );
  }
  
    return (
        <Container fluid="md">
        <Row>
          <MainNavbar isLogo/>
        </Row>
        <div style={{ margin: "0 auto", padding: "0px 32px"}}>
        <Row>
        <ToggleGroup callack={(type: string) => setPresentForm(type)} />
        </Row>
        <Row>
        {presentForm === "Phone" ? <InputMain {...register("Phone")} type="email" placeholder="Ex (337) 378 8383" /> : <InputMain {...register("Email")} type="email" placeholder="johndoe@gmail.com"/>}
        </Row>
        <Row>
            <ButtonContinue active={false}>Continue <i className="bi bi-chevron-right"></i></ButtonContinue>
        </Row>
        <Row>
            <div>
            <span style={{fontSize: "12px"}}>by clicking continue you must agree to near labs </span>
            <a style={{position: "relative",fontSize: "12px", top: "-5px", color: "blue"}}>Terms & Conditions </a> 
            <span style={{position: "relative",fontSize: "12px", top: "-5px"}}>and </span> 
            <a style={{position: "relative",fontSize: "12px", top: "-5px", color: "blue"}}>Privacy Policy</a>
            </div>
            <hr style={{ marginTop: "40px" }}/>
        </Row>
        <Row>
            <p>Already have NEAR account?</p>
            <ButtonLogin>Log in with NEAR <i className="bi bi-chevron-right" /></ButtonLogin>
        </Row>
        </div>
      </Container>
    );
  };
  
  export default HomePage;
  