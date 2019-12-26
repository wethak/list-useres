import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import "./name.css";




export default class Cards extends Component {
  render() {
    return (
      <div>
        <h1>List User</h1>

        <div className="cards" >
          {this.props.users.map(el => (
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <span id="name-radius">
                  <Card.Title id="name">{el.username}</Card.Title>
                </span>
                <Card.Text>{el.name}</Card.Text>
                <Card.Text>{el.email}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    );
  }
}
