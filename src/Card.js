import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function CardVertical() {
  return (
    <div className="container">
      <h1>Nosotros</h1>
      <br />

      <Row>
        <Col md={3}>
        <img src="https://pruebawebhostibarra.000webhostapp.com/mision.jpg" alt="Imagen 2" />
        </Col>
        <Col md={9}>
          <Card>
            <Card.Body>
              <Card.Title>Misión</Card.Title>
              <Card.Text>
              Crear entornos seguros e inteligentes para un monitoreo constante de invernaderos dedicados a los cultivos en las grandes industrias, facilitando herramientas de monitoreo a agricultores.

              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <br />
      <Row>
        <Col md={3}>
          <img src="https://pruebawebhostibarra.000webhostapp.com/vision.jpg" alt="Imagen 2" />
        </Col>
        <Col md={9}>
          <Card>
            <Card.Body>
              <Card.Title>Visión</Card.Title>
              <Card.Text>
              Es que todos los invernaderos dedicados al cultivo de manera comercial o para investigación, dispongan de estas herramientas de monitoreo para evitar tragedias y facilitar la supervisión de los cultivos.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <br />
      <Row>
        <Col md={3}>
          <img src="https://pruebawebhostibarra.000webhostapp.com/ant.jpg" alt="Imagen 3" />
        </Col>
        <Col md={9}>
          <Card>
            <Card.Body>
              <Card.Title>Antecedentes</Card.Title>
              <Card.Text>
              Cultive Care Technologies es una empresa creada a partir de la necesidad existente de monitorear y automatizar determinados procesos dentro de los invernaderos; se destaca principalmente la necesidad de monitorear la humedad y la temperatura en los invernaderos para un control más óptimo y evitando posibles pérdidas por descuidos.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default CardVertical;
