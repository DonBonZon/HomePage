import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";
import Navigationbar from "./components/Navigationbar";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navigationbar />
      <Header />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
