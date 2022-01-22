import { Alert } from "react-bootstrap";

const OnlyMobile: React.FC = () => {
  
    return (
        <Alert variant="success">
        <Alert.Heading>Hey, nice to see you</Alert.Heading>
        <p>
        Mobile device is not supported, trying viewing the page in a desktop or
        tablet
        </p>
        <hr />
        <p className="mb-0">
          Our near app is currently available on mobile devices only.
        </p>
      </Alert>
    );
  };
  
  export default OnlyMobile;
  