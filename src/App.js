import { BrowserRouter as Router } from "react-router-dom";
// style
import "./assets/scss/style.scss";
// componets
import { Banner } from "./componets/organism/banner";
import { Catagory } from "./componets/organism/catagory";

function App() {
  return (
    <Router >
      <div className="App">
        <Banner />
        <Catagory />
      </div>
    </Router>
  );
}

export default App;
