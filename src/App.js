import { BrowserRouter as Router } from "react-router-dom";
// style
import "./assets/scss/style.scss";
// componets
import { Banner } from "./componets/organism/banner";
import { Catagory } from "./componets/organism/catagory";
import { SalesRecommended } from "./componets/organism/sales-recommended";
import { NewArrivals } from "./componets/organism/new-arrivals";

function App() {
  return (
    <Router >
      <div className="App">
        <Banner />
        <Catagory />
        <SalesRecommended />
        <NewArrivals />
      </div>
    </Router>
  );
}

export default App;
