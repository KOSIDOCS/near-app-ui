import { useState } from "react";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import { ButtonToggle, ButtonContinue, ButtonLogin } from "../Components/CustomBtn";
import { InputMain } from "../Components/CustomInputs";
import MainNavbar from "../Components/MainNavbar";

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
    Email: yup.string().required(),
  Phone: yup.number().positive().integer().required(),
}).required();

const HomePage: React.FC = () => {

const types = ["Email", "Phone"];

const [presentForm, setPresentForm ] = useState<string>("");

const [ isValue, setIsValue ] = useState<string>("");

const {
    register,
    getFieldState,
    handleSubmit,
    formState: { isDirty, isValid }
  } = useForm({
    mode: "onChange",
    defaultValues: {
      firstName: ""
    },
    resolver: yupResolver(schema)
  });

  // you can invoke before render or within the render function
  const fieldState = getFieldState("firstName");

// const { register, handleSubmit, formState:{ errors } } = useForm({
//     resolver: yupResolver(schema)
//   });

  const onSubmit = data => console.log(data);
  
  // custom toggle button
  function ToggleGroup({ callack }: any) {

    const [active, setActive] = useState(types[0]);

    const handleClick = (type: string) => {
        setActive(type);
        callack(type);
    }
    return (
      <div>
        {types.map((type) => (
          <ButtonToggle type="button" key={type} active={active === type} onClick={() => handleClick(type)}>
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
        <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ margin: "0 auto", padding: "0px 32px"}}>
        <Row>
        <ToggleGroup callack={(type: string) => setPresentForm(type)} />
        </Row>
        <Row>
        {presentForm === "Phone" ? <InputMain {...register("Phone")} type="email" placeholder="Ex (337) 378 8383" onChange={(val) => console.log(val)} /> : <InputMain {...register("Email")} type="email" placeholder="johndoe@gmail.com"/>}
        </Row>
        <Row>
            <ButtonContinue type="submit" active={getFieldState("Phone").isValid || getFieldState("Email").isValid}>Continue <i className="bi bi-chevron-right"></i></ButtonContinue>
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
        </form>
      </Container>
    );
  };
  
  export default HomePage;
  