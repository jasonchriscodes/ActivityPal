import React from "react";
import { Link } from "react-router-dom";
import { Container, Header, Segment, Image, Button } from "semantic-ui-react";

export default function HomePage() {
  return (
    <Segment inverted textAlign="center" vertical className="masthead">
      <Container>
        <Header as="h1" inverted>
          <Image
            size="massive"
            src="/assets/logo.png"
            alg="logo"
            style={{ marginBottom: 12 }}
          />
          ActivityBud
        </Header>
        <Header as="h2" inverted content="Welcome to ActivityBud" />
        <Button as={Link} to="/login" size="huge" inverted>
          Login!
        </Button>
      </Container>
    </Segment>
  );
}
