import React from "react";
import {
  Navbar,
  Form,
  NavbarBrand,
  FormControl,
  Button
} from "react-bootstrap";
import logo from "../images/logo6.jpg"; // Tell Webpack this JS file uses this image
import styled from "styled-components";
import Background from "../images/bg.jpg";
import Stack from "../images/stack.png";

const Logo = styled.img`
  width: 30px;
  height: 30px;
  margin: 6px;
  background: transparent;
`;

var sectionStyle = {
  width: "100%",
  height: "800px",
  backgroundImage: `url(${Background})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat"
};
class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <NavbarBrand href="#home" style={{ font: "Roboto,monospace" }}>
            FullStack <Logo src={logo} alt="logo"></Logo>
            Group
          </NavbarBrand>

          <Form className="form-inline ml-auto">
            <FormControl type="text" placeholder="Search" className="mr-sm-3" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar>

        <div style={sectionStyle}>
          <div>
            <center>
              {" "}
              <h1>Javascript Interview Questions</h1>
              <h2>React Interview Questions</h2>
              <h3>NodeJs Interview Questions</h3>
              <h4>HTML Interview Questions</h4>
              <h5>CSS Interview Questions</h5>
              <h6>MYSQL Interview Questions</h6>
            </center>
          </div>
          <img src={Stack} alt="stack" className="stack"></img>
        </div>
      </div>
    );
  }
}

export default App;
