import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import Particle from "./Particle";

export default function Footer() {
  return (
    <div className="page-footer font-small pt-4 footer_wrapper">
      <Particle style={{ position: "absolute", bottom: 0 }} />

      <Container fluid className="text-center ">
        <Row>
          <Col>
            <div>
              <a href="https://github.com/DonBonZon/" className="text-reset">
                <FontAwesomeIcon icon={faGithub} size="4x" className="p-2" />
              </a>
              <a
                href="https://www.linkedin.com/in/damian-liminowicz-5327a9202/"
                className="text-reset"
              >
                <FontAwesomeIcon icon={faLinkedin} size="4x" className="p-2" />
              </a>
              <a
                href="https://www.facebook.com/damian.liminowicz"
                className="text-reset"
              >
                <FontAwesomeIcon icon={faFacebook} size="4x" className="p-2" />
              </a>
            </div>
            <div className="footer-copyright text-center py-3">
              © 2022 Copyright:
              <a
                href="https://github.com/DonBonZon/"
                className="text-reset text-decoration-none"
              >
                Damian Liminowicz
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
