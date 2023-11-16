import React from "react";
import { productJSON } from "./product";
import { Alert, Card, Container, Row } from "react-bootstrap";
import Navbar from "./components/Navbar";
import Image from "./components/Image";
import Name from "./components/Name";
import Description from "./components/Description";
import Price from "./components/Price";

const firstName = prompt("What's your first name?");
console.log(firstName);

export default function App() {
  const product = JSON.parse(productJSON);
  return (
    <Container>
      {/* Navbar component starts here */}
      <Navbar />
      {/* Product display section starts here*/}
      <Row>
        <Card className="mb-3 mx-auto bg-secondary bg-gradient text-white" style={{ width: "18rem" }}>
          <Image />
          <Card.Body>
            <Name />
            <Description />
            <Price />
          </Card.Body>
        </Card>
      </Row>
      {firstName ? (
        <Alert
          key={"dark"}
          variant={"dark"}
          className="flex-grow-1 d-flex align-items-center bg-dark text-light"
        >
          <img
            src="https://media.istockphoto.com/id/825083568/photo/proud-latin-man.webp?b=1&s=170667a&w=0&k=20&c=CyG-7qRsTApt2se9eMhc-iPBHMj5Yj-ISytCWd3uZzQ="
            alt="#"
            className="rounded-circle"
            style={{
              width: "75px",
              height: "75px",
              marginRight: 16,
              objectFit: "cover",
            }}
          />
          <h3>Hello {firstName}</h3>
        </Alert>
      ) : (
        <Alert key="dark" variant="dark" className="bg-dark text-light">
          <h3>Hello there!</h3>
        </Alert>
      )}
    </Container>
  );
}
