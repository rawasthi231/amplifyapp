import React, { useState } from "react";
import {useHistory} from "react-router-dom";
import axios from "axios";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export default function Users(props) {

  const [data, setData] = useState({});
  let history = useHistory();
  const handleChange = (e) => {
    setData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = () => {
    axios.post("http://localhost:8000/user_registration", { data })
      .then(response => console.log(response.data))
      .catch(error => console.error(error))
      .finally(() => history.push("/users"))
  }

  return (
    <>
      <Container>
        <Row>
          <Col xs={12} sm={6} md={4} lg={4} style={{ border: '1px solid #aeaeae', borderRadius: '10px', margin: '5px', boxShadow: '1px 0px 5px 0px #afafaf', padding: '10px', backgroundColor: '#ffeffe' }}>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label className="float-left">Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Full Name" name="name" onChange={handleChange} />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label className="float-left">Mobile No.</Form.Label>
                <Form.Control type="text" placeholder="Enter Mobile No." name="mobile" onChange={handleChange} />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label className="float-left">Email Address</Form.Label>
                <Form.Control type="email" placeholder="Enter Email" name="email" onChange={handleChange} />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label className="float-left">Address</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Enter Address" name="address" onChange={handleChange} />
              </Form.Group>
              <Form.Group>
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Button variant="primary" type="button" onClick={handleSubmit}>
                Submit
              </Button> &nbsp;
              <Button variant="dark" type="button" onClick={() => window.history.back()}>
                Back
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  )
}