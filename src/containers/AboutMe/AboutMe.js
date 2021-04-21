import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
class AboutMe extends Component {
  render() {
    return (
      <Jumbotron fluid>
        <Container>
          <h1 className="display-4">About Me</h1>
          <p className="lead">
            I'm a .NET developer who likes reading light novels in my free time.
          </p>
          <hr className="my-4"/>
          <p>
            To be filled
          </p>
        </Container>
      </Jumbotron>
    );
  }
}

export default AboutMe;
