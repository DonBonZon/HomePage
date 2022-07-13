import React from "react";
import { Card, Container } from "react-bootstrap";
import moon from "../images/moon.svg";
import rocket from "../images/rocket.svg";
import Particle from "./Particle";

export default function Header() {
  return (
    <div className="header_wrapper" id="home">
      <Particle id="header_particles" />
      <div className="header_content">
        <img src={moon} alt="astronaut" className="header_img_l" />

        <img src={rocket} alt="rocket" className="header_img_r" />

        <Container className="header_card">
          <Card>
            <Card.Body>
              <Card.Title>Hello, my name is Damian</Card.Title>
              <hr />
              <Card.Text>
                I am graduate in computer science at University of Warmia and
                Mazury in Olsztyn and freshly after earning title of master in
                data science.
              </Card.Text>
              <hr />
              <Card.Text>
                In my free time i usualy go for mtb ride, do calisthenics
                workout, listen to music or play games, preferably with group of
                my close friends.
              </Card.Text>
              <hr />
              <Card.Text>
                I like minimalism and simple things. I prefer when things are
                clean and in order and i consider myself perfectionist.
              </Card.Text>
              <hr />
              <Card.Text>
                If you want to know more please feel free to explore this page.
              </Card.Text>
            </Card.Body>
          </Card>
        </Container>
      </div>
    </div>
  );
}
