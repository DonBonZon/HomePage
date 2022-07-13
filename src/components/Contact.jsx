import React from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formik = useFormik({
    initialValues: {
      email: "",
      topic: "Sugestions",
      message: "",
    },
    onSubmit: (values, { resetForm }) => {
      emailjs
        .send(
          "service_5wmp4an",
          "template_i1r3omg",
          values,
          "vzeJCw2dAUyn1RFea"
        )
        .then(
          (result) => {
            console.log(result.text);
            resetForm();
            alert("Email was sent successfully");
          },
          (error) => {
            console.log(error.text);
            alert("Something went wrong");
          }
        );
    },
    validationSchema: Yup.object({
      email: Yup.string().email().required(),
      topic: Yup.string().oneOf(
        ["Sugestions", "Job offer", "Off topic"],
        "The topic you chose does not exist"
      ),
      message: Yup.string().required().min(20).max(500),
    }),
  });

  return (
    <div id="contact_me">
      <div className="container bg-light ">
        <h1 className="display-4 fw-bold">Feel free to contact me</h1>
        <hr />
      </div>

      <Container>
        <Form onSubmit={formik.handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Email address:</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={formik.handleChange}
              name="email"
              value={formik.values.email}
            />

            {formik.errors.email ? (
              <Alert className="mt-1" variant="danger">
                {formik.errors.email}
              </Alert>
            ) : null}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Select topic: </Form.Label>
            <Form.Select
              aria-label="Default select example"
              name="topic"
              value={formik.values.topic}
              onChange={formik.handleChange}
            >
              <option>Sugestions</option>
              <option>Job offer</option>
              <option>Off topic</option>
            </Form.Select>
            {formik.errors.topic ? (
              <Alert className="mt-1" variant="danger">
                {formik.errors.topic}
              </Alert>
            ) : null}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Message:</Form.Label>
            <Form.Control
              as="textarea"
              name="message"
              rows={3}
              value={formik.values.message}
              onChange={formik.handleChange}
              placeholder="Enter message (20-500 characters)"
            />
            {formik.errors.message ? (
              <Alert className="mt-1" variant="danger">
                {formik.errors.message}
              </Alert>
            ) : null}
          </Form.Group>

          <Button className="mb-3 w-100 " variant="warning" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
}
