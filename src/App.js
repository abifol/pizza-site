import "../src/index.css";
import Header from "./component/Header";
import Menu from "./component/Menu";
import Footer from "./component/Footer";
import Button from "./component/Button";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
      <Button />
    </div>
  );
}

export default App;
