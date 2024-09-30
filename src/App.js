import Services from "./components/Services";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Home from "./components/Home";

const sections = [
  { name: "Home", component: <Home /> },
  { name: "About", component: <About /> },
  { name: "Services", component: <Services /> },
  { name: "Contact", component: <Contact /> },
];

function App() {
  return (
    <div className="App">
      <Header sections={sections} />
      {sections.map((s) => s.component)}
      <Footer />
    </div>
  );
}

export default App;
