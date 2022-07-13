import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import python from "../images/python-5.svg";
import javascript from "../images/logo-javascript.svg";
import misc from "../images/misc.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
export default function Skills() {
  const starColor = "#ffe234";
  return (
    <div className="my-4" id="skills">
      <div className="container bg-light ">
        <h1 className="display-4 fw-bold">My IT Skills</h1>
        <hr />
      </div>
      <Container>
        <Row>
          <Col>
            <Card className="skill_card my-1 my-lg-0">
              <Card.Img src={python} />
              <Card.Body>
                <Card.Title>Python</Card.Title>
                <hr />
                <Card.Subtitle>NumPy</Card.Subtitle>
                {Array(5)
                  .fill()
                  .map((list, idx) => (
                    <FontAwesomeIcon
                      key={idx}
                      icon={faStar}
                      color={starColor}
                    />
                  ))}
                <Card.Subtitle>Pandas</Card.Subtitle>
                {Array(5)
                  .fill()
                  .map((list, idx) => (
                    <FontAwesomeIcon
                      key={idx}
                      icon={faStar}
                      color={starColor}
                    />
                  ))}

                <Card.Subtitle>PyTorch</Card.Subtitle>
                {Array(4)
                  .fill()
                  .map((list, idx) => (
                    <FontAwesomeIcon
                      key={idx}
                      icon={faStar}
                      color={starColor}
                    />
                  ))}
                <Card.Subtitle>Scikit-learn</Card.Subtitle>
                {Array(4)
                  .fill()
                  .map((list, idx) => (
                    <FontAwesomeIcon
                      key={idx}
                      icon={faStar}
                      color={starColor}
                    />
                  ))}
                <Card.Subtitle>Django Rest Framework</Card.Subtitle>
                {Array(4)
                  .fill()
                  .map((list, idx) => (
                    <FontAwesomeIcon
                      key={idx}
                      icon={faStar}
                      color={starColor}
                    />
                  ))}
                <Card.Text>
                  Good knowledge of python langue, specialized in data analysis
                  (Data Science student) as well as familiarity of django rest
                  framework used to create api.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="skill_card my-1 my-lg-0">
              <Card.Img src={javascript} />
              <Card.Body>
                <Card.Title>Javascript</Card.Title>
                <hr />
                <Card.Subtitle>React</Card.Subtitle>
                {Array(5)
                  .fill()
                  .map((list, idx) => (
                    <FontAwesomeIcon
                      key={idx}
                      icon={faStar}
                      color={starColor}
                    />
                  ))}

                <Card.Subtitle>Redux</Card.Subtitle>
                {Array(4)
                  .fill()
                  .map((list, idx) => (
                    <FontAwesomeIcon
                      key={idx}
                      icon={faStar}
                      color={starColor}
                    />
                  ))}
                <Card.Subtitle>TypeScript</Card.Subtitle>
                {Array(4)
                  .fill()
                  .map((list, idx) => (
                    <FontAwesomeIcon
                      key={idx}
                      icon={faStar}
                      color={starColor}
                    />
                  ))}
                <Card.Subtitle>Express.js</Card.Subtitle>
                {Array(4)
                  .fill()
                  .map((list, idx) => (
                    <FontAwesomeIcon
                      key={idx}
                      icon={faStar}
                      color={starColor}
                    />
                  ))}
                <Card.Subtitle>jQuery</Card.Subtitle>
                {Array(5)
                  .fill()
                  .map((list, idx) => (
                    <FontAwesomeIcon
                      key={idx}
                      icon={faStar}
                      color={starColor}
                    />
                  ))}
                <Card.Text>
                  Good knowledge of JavaScript and TypeScript, used to create
                  front end using React as well as knowledge of some backend
                  libaries such as express.js.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="skill_card my-1 my-lg-0">
              <Card.Img src={misc} style={{ height: "18rem" }} />
              <Card.Body>
                <Card.Title>Other</Card.Title>
                <hr />
                <Card.Subtitle>Git</Card.Subtitle>
                {Array(5)
                  .fill()
                  .map((list, idx) => (
                    <FontAwesomeIcon
                      key={idx}
                      icon={faStar}
                      color={starColor}
                    />
                  ))}

                <Card.Subtitle>Sql</Card.Subtitle>
                {Array(5)
                  .fill()
                  .map((list, idx) => (
                    <FontAwesomeIcon
                      key={idx}
                      icon={faStar}
                      color={starColor}
                    />
                  ))}
                <Card.Subtitle>NoSql (mongoDB)</Card.Subtitle>
                {Array(5)
                  .fill()
                  .map((list, idx) => (
                    <FontAwesomeIcon
                      key={idx}
                      icon={faStar}
                      color={starColor}
                    />
                  ))}
                <Card.Subtitle>HTML</Card.Subtitle>
                {Array(5)
                  .fill()
                  .map((list, idx) => (
                    <FontAwesomeIcon
                      key={idx}
                      icon={faStar}
                      color={starColor}
                    />
                  ))}
                <Card.Subtitle>CSS</Card.Subtitle>
                {Array(4)
                  .fill()
                  .map((list, idx) => (
                    <FontAwesomeIcon
                      key={idx}
                      icon={faStar}
                      color={starColor}
                    />
                  ))}
                <Card.Subtitle>JAVA</Card.Subtitle>
                {Array(4)
                  .fill()
                  .map((list, idx) => (
                    <FontAwesomeIcon
                      key={idx}
                      icon={faStar}
                      color={starColor}
                    />
                  ))}
                <Card.Subtitle>Linux</Card.Subtitle>
                {Array(4)
                  .fill()
                  .map((list, idx) => (
                    <FontAwesomeIcon
                      key={idx}
                      icon={faStar}
                      color={starColor}
                    />
                  ))}

                <Card.Text>
                  Experienced with databases and linux operating system.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
