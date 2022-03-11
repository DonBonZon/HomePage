import Navigationbar from "./components/Navigationbar";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <Navigationbar/>
      <div className="jumbotron">.....</div>
      <Container fluid className="p-0">
      <div id="home" style={{height: 500,background:'red'}}>home</div>
      <div id="about_me" style={{height: 500,background:'blue'}}>about_me</div>
      <div id="skills" style={{height: 500,background:'green'}}>skills</div>
      <div id="projects" style={{height: 500,background:'yellow'}}>projects</div>
      <div id="contact_me" style={{height: 500,background:'red'}}>contact_me</div>
      </Container>
    </div>
  );
}

export default App;
