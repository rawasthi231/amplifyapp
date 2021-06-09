import React, { useState, useEffect } from "react";
import { Table, Container, Row, Col } from "react-bootstrap";
import axios from "axios";
// const SERVER = process.env.SERVER;

export default function Users() {

  const [data, setData] = useState([]);

  useEffect(() => {
    let url = `https://jsonplaceholder.typicode.com/users`;
    axios.get(url).then(response => setData(response.data)).catch(error => console.error(error));
  }, [])

  return (
    <>
      <Container>
        <Row>
          <Col md={6}>
            <Table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Mobile</th>
                  <th>Email</th>
                  <th>Website</th>
                </tr>
              </thead>
              <tbody>
                {
                  data.map((val, index) => (
                    <tr key={index}>
                      <td>{(index + 1)}</td>
                      <td>{val.name}</td>
                      <td>{val.phone}</td>
                      <td>{val.email}</td>
                      <td>{val.address.city}</td>
                    </tr>
                  ))
                }
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  )
}