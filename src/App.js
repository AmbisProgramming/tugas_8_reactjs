import React, { useState } from "react";
import { Button, Stack, Container, Row, Col, DropdownButton, Dropdown, Image, Breadcrumb, Alert, Carousel, ListGroup, Form, Modal } from "react-bootstrap";

function App() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>Anda Berhasil Login</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Username & Passsword
          </Button>
        </Modal.Footer>
      </Modal>
      <Container fluid>
        <Row>
          <Col>
            <Stack direction="horizontal" className="bg-dark">
              <div className="mb-auto">
                <DropdownButton id="dropdown-basic-button" title="Pilih Bahasa">
                  <Dropdown.Item href="#/action-1">Bahasa Indonesia</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Inggris</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Jepang</Dropdown.Item>
                </DropdownButton>
              </div>
              <div className=" ms-auto me-5">
                <Image src="https://png.pngtree.com/svg/20161113/ef1b24279e.png" width={56}></Image>
                <center>
                  <p className="text-light"> Alan Saputra</p>
                </center>
              </div>
            </Stack>
          </Col>
        </Row>
        <Row>
          <Col sm={{ span: 6, offset: 6 }}>
            <Alert variant="secondary">
              <Breadcrumb>
                <Breadcrumb.Item className="text-decoration-none" href="/">
                  Home
                </Breadcrumb.Item>
                <Breadcrumb.Item className="text-decoration-none" href="/">
                  Berita
                </Breadcrumb.Item>
                <Breadcrumb.Item active>Bola</Breadcrumb.Item>
              </Breadcrumb>
            </Alert>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <Carousel>
              <Carousel.Item>
                <img className="d-block w-70" height={500} src="https://images.performgroup.com/di/library/GOAL/30/f0/neymar-psg-paris-saint-germain-2018-19_gmakk5891n9c19udcwofmrsgc.jpg?t=-1258742791&quality=60&w=1600" alt="First slide" />
                <Carousel.Caption>Neymar Bahas Kontrak Baru Di Paris Saint- Germain</Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-70" height={500} src="https://images.performgroup.com/di/library/GOAL/f3/33/england-celebrate-vs-montenegro_e97kv5anpqlq1gr9nc2qaz4ko.jpg?t=-1232521935&quality=60&w=1600" alt="Second slide" />
                <Carousel.Caption>
                  Inggris Mau Jadi <br /> Tim Terbaik Di Dunia{" "}
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-70" height={500} src="https://images.performgroup.com/di/library/GOAL/63/7f/sani-rizki-fauzi-indonesia-u-22_4yztc4nehkt61fa7omuyagf71.jpg?t=351764441&quality=60&w=1600" alt="Third slide" />
                <Carousel.Caption>
                  Sani Rizki Fauzi Tegaskan <br /> Mental Pemain Timnas Indonesia U-23 Tetap Bagus
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
        <br></br>
        <Row>
          <Col>
            <ListGroup as="ul">
              <ListGroup.Item as="li" active>
                Liga 1 Indonesia
              </ListGroup.Item>
              <ListGroup.Item as="li">Liga Primer Inggris</ListGroup.Item>
              <ListGroup.Item as="li" disabled>
                Divisi Primera
              </ListGroup.Item>
              <ListGroup.Item as="li">Serie A</ListGroup.Item>
              <ListGroup.Item as="li">Ligue 1</ListGroup.Item>
              <ListGroup.Item as="li">Bundes Liga</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col>
            <Alert variant="secondary">
              <br></br>
              <br></br>
              <Alert.Heading>DIVISI PRIMERA</Alert.Heading>
              <p>Main Untuk Catalurnya, Gerard Pique Minta Dihormati</p>
              <Button variant="primary">Read More</Button>
              <br></br>
              <br></br>
              <br></br>
            </Alert>
          </Col>
          <Col>
            <Form>
              <center>
                <Image src="https://png.pngtree.com/svg/20161113/ef1b24279e.png" width={56}></Image>
                <h3>Silahkan Login</h3>
              </center>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Masukan email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Term & Condition" />
              </Form.Group>
              <Button variant="primary" type="submit" onClick={handleShow}>
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
