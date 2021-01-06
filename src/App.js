import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import EmployeeTable from "./components/EmployeeTable";
import Wrapper from "./components/Wrapper";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Jumbotron fluid>
        <Container>
          <h2>Employee Directory</h2>
          <p>stuff stuff stuff</p>
        </Container>
      </Jumbotron>
      <Wrapper>
        <EmployeeTable />
      </Wrapper>
    </>
  )
}

export default App;
