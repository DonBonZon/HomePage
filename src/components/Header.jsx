import React from "react";
import { Card, Container } from "react-bootstrap";
import moon from "../images/moon.svg";
import rocket from "../images/rocket.svg";
import Particles from "react-tsparticles";

export default function Header() {
  return (
    <div className="header_wrapper" id="home">
      <Particles
        id="header_particles"
        options={{
          fullScreen: false,
          fpsLimit: 60,
          preset: "Stars",
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#3f3d56",
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 3,
              straight: false,
            },
            number: {
              value: 80,
            },
            opacity: {
              value: 0.8,
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      />
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
                Mazury in Olsztyn and currently data science student.
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
